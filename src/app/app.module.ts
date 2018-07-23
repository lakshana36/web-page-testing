import { HttpModule } from '@angular/Http';
import { EventCreateService } from './admin/admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ appRoutes}from './app.route';
import { AppComponent } from './app.component';
import { SkillManagementComponent } from './admin/pages/skill-management/skill-management.component';
import { LocationManagementComponent } from './admin/pages/location-management/location-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AdminhomeComponent } from './admin/pages/adminhome/adminhome.component';
// import { ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
