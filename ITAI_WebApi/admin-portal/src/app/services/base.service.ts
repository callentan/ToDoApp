import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  endpoint = 'http://192.168.0.5:8888';
  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}
