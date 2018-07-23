import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { EventEnrollmentComponent } from './pages/event-enrollment/event-enrollment.component';
import { RouterModule } from '@angular/router';
import { interviewRoutes } from 'src/app/interviewer/interviewer_route';
import { InterviewerhomeComponent } from './pages/interviewerhome/interviewerhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SimilarModule } from '../similar/similar.module';
import { UpdateComponent } from '../similar/pages/update/update.component';
import { ChangePwdComponent } from '../similar/pages/change-pwd/change-pwd.component';
import { InterviewerService } from './interviewer.service';
import { HttpModule } from '@angular/http';



@NgModule({
  imports: [
    CommonModule,
     ReactiveFormsModule,
    RouterModule.forChild(interviewRoutes),
    SimilarModule,
    HttpModule
  ],
  providers:[InterviewerService],
  declarations: [DashboardComponent, RegistrationComponent, EventEnrollmentComponent, InterviewerhomeComponent]
})
export class InterviewerModule { }
