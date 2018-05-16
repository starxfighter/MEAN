import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'display', component: DisplayComponent},
  { path: 'add', component: AddComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: '', component: DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
