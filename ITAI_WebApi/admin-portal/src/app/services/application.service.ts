import { Observable } from 'rxjs';
import { Application } from '../../model/application';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService extends BaseService {
  private http = inject(HttpClient);

  private readonly path = '/api/applications';
  private readonly pathAppId = '/api/application/appid';

  getApplications(): Observable<Application[]> {
    const url = `${this.endpoint}${this.path}`;
    return this.http.get<Application[]>(url);
  }
  getApplicationByAppId(): Observable<Application> {
    const url = `${this.endpoint}${this.pathAppId}`;
    return this.http.get<Application>(url);
  }
  getApplicationById(): Observable<Application> {
    const url = `${this.endpoint}${this.path}`;
    return this.http.get<Application>(url);
  }
  createApplication(application: Application): Observable<void> {
    const url = `${this.endpoint}${this.path}`;
    return this.http.post<void>(url, application);
  }
  updateApplication(application: Application): void {
    const url = `${this.endpoint}${this.path}`;
    this.http.put(url, application).subscribe();
  }
  deleteApplicationById(id: string): void {
    const url = `${this.endpoint}${this.path}/${id}`;
    this.http.delete(url).subscribe();
  }
  deleteApplicationByAppId(appId: string): void {
    const url = `${this.endpoint}${this.pathAppId}/${appId}`;
    this.http.delete(url).subscribe();
  }
}
