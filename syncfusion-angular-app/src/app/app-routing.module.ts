import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './Components/basic/basic.component';
import { LayoutComponent } from './Components/layout/layout.component';

const routes: Routes = [
  {
    path : 'layout',
    component : LayoutComponent ,
    children : [
      { 
        path: 'basic',
      component : BasicComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
