import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTES } from '../../assets/config';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TotalData } from '../api/covid';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httClient: HttpClient) {}

  getTotals() {
    return this.httClient.get<TotalData[]>(API_ROUTES.totals);
  }
}
