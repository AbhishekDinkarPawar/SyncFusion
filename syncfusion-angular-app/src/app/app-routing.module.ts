import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './Components/basic/basic.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { CarouselComponent } from '@syncfusion/ej2-angular-navigations';

const routes: Routes = [
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'Chart',
        component: BasicComponent
      },
      {
        path: 'carousel',
        component: CarouselComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
