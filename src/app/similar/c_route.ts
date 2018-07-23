import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UpdateComponent } from './pages/update/update.component';
export const appRoutes: Routes = [
   
    {
      path: '',
     component: LoginComponent
    },
    {
        path:'updateprofile',
        component:UpdateComponent
    }
]