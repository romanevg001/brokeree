import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2MapModule} from 'ng2-map';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { ApiUsersService } from './user-services/api-users.service';

import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsService } from './statistics/statistics.service';





const routes: Routes = [
      {path:'', redirectTo: '/users', pathMatch: 'full' },
      {
        path:'users',  
        component: UserListComponent,
      },
      {
        path: 'users/:id',
        component: UserItemComponent
      },
      {
        path:'statistics',  
        component: StatisticsComponent,
      }
      
];

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserListComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    Ng2MapModule,
    Ng2GoogleChartsModule
   
  ],
  exports: [RouterModule],
  providers: [ApiUsersService,StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
