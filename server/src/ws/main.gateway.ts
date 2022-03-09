import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";

@WebSocketGateway({
    cors: {
      origin: '*',
    },
  })
  export class MainGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() protected readonly server: Server; 
    
    handleConnection(client: any, ...args: any[]) {
      console.log('Client Connected')
    }
    handleDisconnect(client: any) {
      throw new Error("Client Disconnected.");
    }

  }