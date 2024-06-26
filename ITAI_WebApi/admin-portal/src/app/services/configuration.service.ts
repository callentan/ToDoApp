import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from '../../model/configuration';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService extends BaseService {
  private http = inject(HttpClient);
  private readonly path = '/api/openapps/configuration';
  getConfiguration(): Observable<Configuration> {
    const url = `${this.endpoint}${this.path}`;
    return this.http.get<Configuration>(url);
  }
  updateConfiguration(config: Configuration): void {
    const url = `${this.endpoint}${this.path}`;
    this.http.put(url, config);
  }
}
