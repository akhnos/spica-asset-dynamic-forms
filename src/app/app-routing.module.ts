import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { QrComponent } from './pages/qr/qr.component';


const routes: Routes = [
  {
    path: '',
    component: QrComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
