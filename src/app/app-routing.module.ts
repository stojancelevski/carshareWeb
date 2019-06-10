import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {AboutComponent} from './about/about.component';
import {BedriverComponent} from './bedriver/bedriver.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'drivers', component: BedriverComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AboutComponent,
    NotfoundComponent,
    BedriverComponent,
  ],
  imports: [

    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule {
}
