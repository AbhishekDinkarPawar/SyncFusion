import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { BasicComponent } from './Components/basic/basic.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ChartComponent } from './Components/chart/chart.component';
import { CarouselComponent } from './Components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    LayoutComponent,
    ChartComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule, PagerModule ,
    AppBarModule,
    ButtonModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
