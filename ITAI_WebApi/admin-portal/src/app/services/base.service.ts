import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  endpoint = 'http://117.88.94.61:8888';
  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}
