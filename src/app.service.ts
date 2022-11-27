import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getHelloWorld() {
    try {
      const response = await this.httpService.axiosRef({
        method: 'GET',
        baseURL: 'https://api.example.com',
        url: '/good-morning-world',
        headers: {
          Authorization: 'Bearer some_test_token',
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getHelloPerson(person: string) {
    try {
      const response = await this.httpService.axiosRef({
        method: 'GET',
        baseURL: 'https://api.example.com',
        url: '/good-morning?person=' + person,
        headers: {
          Authorization: 'Bearer some_test_token',
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async createMessage(message: string) {
    try {
      const response = await this.httpService.axiosRef({
        method: 'POST',
        baseURL: 'https://api.example.com',
        url: '/create-message',
        data: {
          message,
        },
        headers: {
          Authorization: 'Bearer some_test_token',
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
