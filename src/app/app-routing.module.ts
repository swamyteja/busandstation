import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {path: 'offers',component:DummyComponent},
  {path: 'help',component:DummyComponent},
  {path: 'userlogin',component:DummyComponent},
  {path: 'deptlogin',component:DummyComponent},
  {path: 'more',component:DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
