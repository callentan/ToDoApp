import { Routes } from '@angular/router';
import { BaseComponent } from './features/base/base/base.component';
import { ApplicationComponent } from './features/application/application.component';
import { ConfigurationComponent } from './features/configuration/configuration.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    title: 'Home page',
    children: [
      {
        path: 'application',
        component: ApplicationComponent,
        title: 'Application',
      },
      {
        path: 'configuration',
        component: ConfigurationComponent,
        title: 'Configuration',
      },
    ],
  },
];
