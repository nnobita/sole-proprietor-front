import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NoticeTrnComponent } from './notice-trn/notice-trn.component';
import { SoleProprietorMstComponent } from './sole-proprietor-mst/sole-proprietor-mst.component';
import { BasicMstComponent } from './basic-mst/basic-mst.component';
import { AppRoutingModule } from './/app-routing.module';
import { SoleProprietorDetailComponent } from './sole-proprietor-detail/sole-proprietor-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SoleProprietorSearchComponent } from './sole-proprietor-search/sole-proprietor-search.component';
import { SoleProprietorFilterComponent } from './sole-proprietor-filter/sole-proprietor-filter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BizpartnerMstComponent } from './bizpartner-mst/bizpartner-mst.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeTrnComponent,
    SoleProprietorMstComponent,
    BasicMstComponent,
    SoleProprietorDetailComponent,
    MessagesComponent,
    SoleProprietorSearchComponent,
    SoleProprietorFilterComponent,
    SidebarComponent,
    BizpartnerMstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
