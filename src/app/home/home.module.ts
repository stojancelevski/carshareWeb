import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {SearchRouteComponent} from './search-route/search-route.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchRouteComponent,
    ResultComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: 'home', component: HomeComponent}
    ]),
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
