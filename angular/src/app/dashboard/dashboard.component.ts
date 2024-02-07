import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'devset_front_end.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'devset_front_end.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
