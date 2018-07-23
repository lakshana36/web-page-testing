import { RouterModule, Routes } from '@angular/router';
export const appRoutes: Routes = [
   
//     {
//       path: '',
//       loadChildren: './registration/registration.module#RegistrationModule'
//     },
   
//     {
//       path: 'interviewer',
//       loadChildren: './interviewer/interviewer.module#InterviewerModule'
//     },
//     {
//       path: 'admin',
//       loadChildren: './admin/admin.module#AdminModule'
//     },
//     {
//       path: 'bts_admin',
//       loadChildren: './admin/admin.module#AdminModule'
//     },
//     {
//       path: 'bts_interviewer',
//       loadChildren: './interviewer/interviewer.module#InterviewerModule'
//     },
//     {
//       path: 'create-event',
//       loadChildren: './admin/admin.module#AdminModule'
//     }
// ]
{
  path: '',
  loadChildren: './registration/registration.module#RegistrationModule'
},
{
  path: 'admin',
  loadChildren: './admin/admin.module#AdminModule'
},
{
  path: 'interviewer',
  loadChildren: './interviewer/interviewer.module#InterviewerModule'
},
{
  path: 'similar',
  loadChildren: './similar/similar.module#SimilarModule'
}
];