import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { BrowseComponent } from './browse/browse.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'browse', component: BrowseComponent},
  { path: 'mine', component: MineComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'sell', component: SellComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
