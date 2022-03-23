import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'http';
import { nanoid } from 'nanoid'
import { json } from 'stream/consumers';
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MainGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() protected readonly server: Server;
  private readonly connectedClient = []
  handleConnection(client: any, ...args: any[]) {
    const userCode = nanoid(8).toUpperCase().replace('-', 'A').replace('_', 'R')
    client.emit('code-register', userCode)
    console.log(client.id, userCode)
    this.connectedClient.push({client, userCode})

  }
  handleDisconnect(client: any) {
    console.log('client dissconnected');
  }

  @SubscribeMessage('send-message')
  sendMessage(client: any, data:string){
    /*
    {
      targetCode : <code>
      content : <content>
    }
    */
    // - target code 
    // - content

    //parse data
    const jsonData = JSON.parse(data)
    const {targetCode, content} = jsonData
    
    //Validate if target code exists
    if(!targetCode){
      this.emitErrorForClient(client, {message : 'invalid message body'})
      return
    }

    //find client with give code
    const targetClient = this.connectedClient.find((c)=>{
      return c.userCode === targetCode
    })

    const sourceClient = this.connectedClient.find((c)=>{
      return client.id === c.client.id
    })

    //if client does not exist emit error
    if(!targetClient){
      this.emitErrorForClient(client, {message : 'client with given code does not exist'})
      return
    }

    //if reached here means all is good and emit the content on incoming-messages event to client
    console.log(sourceClient.userCode)
    targetClient.client.emit('incoming-message', {from: sourceClient.userCode, content })
  }


  private emitErrorForClient(client: any, error : Record<string, any>){
    client.emit('error-notification', error)
  }
}
