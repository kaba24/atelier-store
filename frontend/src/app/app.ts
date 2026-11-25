import { Component, inject, OnInit, signal } from '@angular/core';
import { HealthService } from './services/health.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class App implements OnInit {
  private healthService = inject(HealthService);
  backendStatus = signal('Checking backend...');

  ngOnInit(): void {
    this.healthService.getHealth().subscribe({
      next: (res: any) => this.backendStatus.set(`Backend Status: ${res.status}`),
      error: () => this.backendStatus.set('Backend Status: OFFLINE'),
    });
  }
}
