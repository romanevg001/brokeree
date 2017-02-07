import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ChessComponent } from './chess/chess.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { SearchComponent } from './search/search.component';

import { ApiSearchService } from './search/search-services/api-search.service';







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
      },
      {
        path:'chess',  
        component: ChessComponent,
      },
      {
        path:'singup',  
        component: SingUpComponent,
      },
      {
        path:'login',  
        component: LogInComponent,
      },
       {
        path:'search',  
        component: SearchComponent,
      }
      
];

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserListComponent,
    StatisticsComponent,
    ChessComponent,
    SingUpComponent,
    LogInComponent,
    SearchFormComponent,
    SearchResultComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    Ng2MapModule,
    Ng2GoogleChartsModule
   
  ],
  exports: [RouterModule],
  providers: [ApiUsersService,StatisticsService, ApiSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
