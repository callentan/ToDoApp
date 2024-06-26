import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [RouterOutlet, TabsComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    this.router.navigate(['application']);
  }
}
