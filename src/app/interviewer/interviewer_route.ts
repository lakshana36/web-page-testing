
import { EventEnrollmentComponent } from './pages/event-enrollment/event-enrollment.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';

import { InterviewerhomeComponent } from './pages/interviewerhome/interviewerhome.component';
import { DashboardComponent } from 'src/app/interviewer/pages/dashboard/dashboard.component';
import { UpdateComponent } from '../similar/pages/update/update.component';
import { ChangePwdComponent } from '../similar/pages/change-pwd/change-pwd.component';

export const interviewRoutes: Routes= [
    {
        path: 'home',
        component: InterviewerhomeComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                
            
            },
            {
                path: 'updateprofile',
                component: UpdateComponent
            },
            {
                path: 'cp',
                component: ChangePwdComponent
            },
            {
                path:'enroll',
                component:EventEnrollmentComponent
            }
    
           
        ]
    },
{
    path:'reginterviewer',
    component: RegistrationComponent
},


]