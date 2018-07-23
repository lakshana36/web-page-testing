import { NgModule } from '@angular/core';
import { HeaderComponent } from './ellipses/header/header.component';
import { UpdateComponent } from './pages/update/update.component';
import { LoginComponent } from './pages/login/login.component';
import { ChangePwdComponent } from './pages/change-pwd/change-pwd.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/app/similar/c_route';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillManagementComponent } from '../admin/pages/skill-management/skill-management.component';


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ HeaderComponent,ChangePwdComponent, UpdateComponent,LoginComponent],
  exports: [HeaderComponent,ChangePwdComponent,UpdateComponent]
})
export class SimilarModule { }
