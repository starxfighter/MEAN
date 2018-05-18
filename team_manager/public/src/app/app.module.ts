import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';
import { Game1Component } from './game1/game1.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayersComponent,
    AddComponent,
    StatusComponent,
    Game1Component,
    ListComponent,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
