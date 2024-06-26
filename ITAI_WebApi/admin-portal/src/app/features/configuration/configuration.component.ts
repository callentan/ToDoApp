import { AsyncPipe, NgIf } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Configuration } from '../../../model/configuration';
import { ConfigurationService } from '../../services/configuration.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  configurationService = inject(ConfigurationService);
  isAutoDeletionEnabled: boolean = false;
  configuration$: Observable<Configuration>;
  configuration: Configuration | undefined;
  configurationSub: Subscription;

  constructor() {
    this.configuration$ = this.configurationService.getConfiguration();
    this.configurationSub = this.configuration$.subscribe((config) => {
      this.configuration = config;
    });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.configurationSub?.unsubscribe();
  }
  toggleAutoDeletion(target: any) {
    this.isAutoDeletionEnabled = target['active'];
    // this.configuration.autoDeletion.isEnabled = this.isAutoDeletionEnabled;
  }
  saveConfiguration() {}
}
