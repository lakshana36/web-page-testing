import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from 'src/app/admin/pages/dashboard/dashboard.component';
import { CreateEventComponent } from 'src/app/admin/pages/create-event/create-event.component';
import { AdminhomeComponent } from 'src/app/admin/pages/adminhome/adminhome.component';
import { SkillManagementComponent } from './pages/skill-management/skill-management.component';
import { LocationManagementComponent } from './pages/location-management/location-management.component';
import { UpdateComponent } from '../similar/pages/update/update.component';
import { ChangePwdComponent } from '../similar/pages/change-pwd/change-pwd.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ViewEventComponent } from './pages/view-event/view-event.component';
import { UpdateEventComponent } from './pages/update-event/update-event.component';
export const adminRoutes: Routes= [
    {
        path: 'home',
        component: AdminhomeComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'stats',
                component: StatsComponent
            },
            {
                path: 'event',
                component: CreateEventComponent 

            },
            {
                path: 'view-event',
                component: ViewEventComponent,
                children: [{
                    
                        path: 'update-event',
                        component: UpdateEventComponent
                    
                }
            ]
            },
            
            {
                path: 'update-event',
                component: UpdateEventComponent 

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
        
        path: 'skill',
        component: SkillManagementComponent
    
},
{
        
    path: 'location',
    component: LocationManagementComponent

},
 
        ]

    },
    {
        
            path: 'regadmin',
            component: RegistrationComponent
        
    },
   
    
   
]