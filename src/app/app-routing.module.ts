import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
