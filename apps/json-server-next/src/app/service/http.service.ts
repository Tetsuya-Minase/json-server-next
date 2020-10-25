import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private readonly baseUrl = 'http://localhost:3000';
  constructor(private readonly httpClient: HttpClient) {}

  fetch(url: string) {
    console.log('fetch');
    return this.httpClient.get(`${this.baseUrl}/${url}`);
  }
}
