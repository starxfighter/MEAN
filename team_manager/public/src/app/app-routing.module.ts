import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    {path: 'players', component: PlayersComponent, children: [
      {path: 'list', component: ListComponent},
      {path: 'add', component: AddComponent}
    ]},
    {path: 'status', component: StatusComponent, children: [
      {path: 'game/:id', component: Game1Component},
      {path: 'game/two', component: Game2Component},
      {path: 'game/three', component: Game3Component}
    ]}
  ]},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
