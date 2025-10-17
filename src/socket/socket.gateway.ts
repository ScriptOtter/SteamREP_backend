import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';

@WebSocketGateway(80, { cors: { origin: '*' } })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private intervalId;
  private connectedClients: Set<string>;

  constructor(private readonly prismaService: PrismaService) {
    this.intervalId = null;
    this.connectedClients = new Set(); // Используем Set для хранения уникальных подключенных клиентов
  }

  @WebSocketServer() server: Server;

  startTrackingStats() {
    //console.log(this.connectedClients);
    if (this.intervalId) {
      console.warn('Tracking stats is already running.');
      return;
    }

    this.intervalId = setInterval(async () => {
      const matches = await this.prismaService.matchForAnalysis.findMany();
      const players = await this.prismaService.steamUser.findMany({
        where: {
          NOT: [{ gameAuthenticationCode: null }, { sharedCode: null }],
        },
      });
      this.server.emit('trackingStats', {
        matches: matches.length,
        players: players.length,
      });
      //console.log(matches.length);
    }, 2000);
  }

  stopTrackingStats() {
    //console.log('Stopping tracking stats');
    clearInterval(this.intervalId);
    this.intervalId = null; // Сбрасываем идентификатор
  }

  handleConnection(client: Socket) {
    //console.log(`Client connected: ${client.id}`);
    this.connectedClients.add(client.id); // Добавляем клиента в набор подключенных клиентов

    // Если это первый подключенный клиент, запускаем отслеживание
    if (this.connectedClients.size === 1) {
      this.startTrackingStats();
    }
  }

  handleDisconnect(client: Socket) {
    //console.log(`Client disconnected: ${client.id}`);
    this.connectedClients.delete(client.id); // Удаляем клиента из набора подключенных клиентов

    // Если больше нет подключенных клиентов, останавливаем отслеживание
    if (this.connectedClients.size === 0) {
      this.stopTrackingStats();
    }
  }

  @SubscribeMessage('trackingStats')
  handleTrackingStats(): void {
    // Этот метод можно удалить, если он не нужен для вашей логики
    this.server.emit('trackingStats', () => {
      this.startTrackingStats();
    });
  }
}
