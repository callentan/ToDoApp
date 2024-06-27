import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  endpoint = 'http://f5ee17f68aa34024aedb6f5a9e33dcdc.apicapis.cn-jssz1.ctyun.cn';
  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}
