import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { TotalData } from '../api/covid';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalData: TotalData;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getTotalData();
  }

  getTotalData() {
    this.dashboardService.getTotals().subscribe((totalData: TotalData[]) => {
      this.totalData = totalData[0];
    });
  }
}
