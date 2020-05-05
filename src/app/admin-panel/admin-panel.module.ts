import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    DashboardComponent
  ],
  imports: [CommonModule, AdminPanelRoutingModule],
  exports: [AdminPanelComponent],
})

export class AdminPanelModule {}
