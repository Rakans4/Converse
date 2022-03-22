import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'http';
import { nanoid } from 'nanoid'
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MainGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() protected readonly server: Server;

  handleConnection(client: any, ...args: any[]) {
    const userCode = nanoid(8).toUpperCase().replace('-', 'A').replace('_', 'R')
    client.emit('code-register', userCode)
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
    console.log(data)
  }
}
