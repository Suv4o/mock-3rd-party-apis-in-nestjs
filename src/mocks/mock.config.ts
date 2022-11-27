import { setupServer } from 'msw/node';
import {
  BadRequestException,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import {
  getGoodMorningWorld,
  getGoodMorningPerson,
  createMessage,
} from './endpoints';

interface IMockApiConfig
  extends Partial<OnApplicationBootstrap>,
    Partial<OnApplicationShutdown> {}

@Injectable()
export class MockApiConfig implements IMockApiConfig {
  server: ReturnType<typeof setupServer> = undefined;

  async onApplicationBootstrap() {
    try {
      if (process.env.NODE_ENV === 'development') {
        this.server = setupServer(
          getGoodMorningWorld(),
          getGoodMorningPerson(),
          createMessage(),
        );

        this.server.listen();
      }
    } catch (error) {}
  }

  async OnApplicationShutdown() {
    try {
      if (process.env.NODE_ENV === 'development') {
        this.server?.close();
      }
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
