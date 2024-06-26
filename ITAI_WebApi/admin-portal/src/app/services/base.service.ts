import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  endpoint = 'http://10.0.0.155:2024';
  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}
