import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Application, ApplicationStatus } from '../../../model/application';
import { ApplicationService } from '../../services/application.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent implements OnInit, OnDestroy {
  applicationService = inject(ApplicationService);
  cdr = inject(ChangeDetectorRef);
  isDrawerDisplay: boolean = false;
  applications$!: Observable<Application[]>;
  applications: Application[] = [];
  applicationsSub!: Subscription;
  newApplication: Application | undefined;

  constructor() {
    this.fetchApplications();
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.applicationsSub?.unsubscribe();
  }
  fetchApplications() {
    this.applicationsSub?.unsubscribe();

    this.applicationsSub = this.applicationService
      .getApplications()
      .subscribe((apps) => {
        this.applications = apps;
        this.cdr.detectChanges();
      });
  }
  openCreateApplicationDrawer() {
    this.newApplication = {
      syngoAppId: '',
      name: '',
      status: ApplicationStatus.connecting,
      endpoint: '',
      description: '',
    };
    this.isDrawerDisplay = true;
  }
  onAppNameChange(e: Event) {
    this.newApplication!.name =
      (e.target && (e.target as HTMLInputElement).value) || '';
  }
  onAppIdChange(e: Event) {
    this.newApplication!.syngoAppId =
      (e.target && (e.target as HTMLInputElement).value) || '';
  }
  onAppEndpointChange(e: Event) {
    this.newApplication!.endpoint =
      (e.target && (e.target as HTMLInputElement).value) || '';
  }
  onAppDesChange(e: Event) {
    this.newApplication!.description =
      (e.target && (e.target as HTMLInputElement).value) || '';
  }
  createApplication() {
    this.applicationService
      .createApplication(this.newApplication!)
      .subscribe(() => {
        this.fetchApplications();
        this.isDrawerDisplay = false;
      });
  }
  closeCreateApplicationDrawer() {
    this.isDrawerDisplay = false;
    this.newApplication = undefined;
  }
}
