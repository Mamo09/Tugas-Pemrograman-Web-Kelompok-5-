import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './student/dashboard/dashboard.component';
import { ViewComponent } from './student/view/view.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'student/:id', component: ViewComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
