import { NgModule } from '@angular/core';
import { LandingComponent } from './pages/landing/landing.component';
import{appRoutes} from './route';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
  
    RouterModule.forChild(appRoutes)

  ],
  declarations: [LandingComponent]
})
export class RegistrationModule { }
