import { EventCreateService } from './admin.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillManagementComponent } from './pages/skill-management/skill-management.component';
import { LocationManagementComponent } from './pages/location-management/location-management.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin_route';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { HttpModule } from '@angular/http';
import { ViewEventComponent } from './pages/view-event/view-event.component';
import { UpdateEventComponent } from './pages/update-event/update-event.component';
import { StatsComponent } from './pages/stats/stats.component';
import { SimilarModule } from '../similar/similar.module';
import { HeaderComponent } from '../similar/ellipses/header/header.component';
import { UpdateComponent } from '../similar/pages/update/update.component';
import { ChangePwdComponent } from '../similar/pages/change-pwd/change-pwd.component';

// import { appRoutes } from 'src/app/admin/admin_route';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


// import { appRoutes } from 'src/app/admin/admin_route';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(adminRoutes),
    SimilarModule,
    Ng2GoogleChartsModule
  ],
  providers:[EventCreateService],
  declarations: [LocationManagementComponent,StatsComponent,RegistrationComponent,AdminhomeComponent,CreateEventComponent,DashboardComponent, ViewEventComponent,SkillManagementComponent,UpdateEventComponent]
})
export class AdminModule { 
 

constructor() {
 
}
}
