import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  private readonly HEALTH_CHECK_URL = 'http://localhost:8080/api/health';

  constructor(private http: HttpClient) { }

  /**
   * Checks the health status of the backend API.
   * @returns An Observable that emits the health check response.
   */
  getHealth(): Observable<any> {
    return this.http.get<any>(this.HEALTH_CHECK_URL);
  }
}