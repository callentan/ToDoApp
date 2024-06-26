import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsComponent {
  private router = inject(Router);
  route: string = 'application';
  loadApplicationPage() {
    this.router.navigate(['application']);
  }
  loadConfigurationPage() {
    this.router.navigate(['configuration']);
  }
}
