import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { MarketPageModule } from '../market/market.module';
import { HomePageModule } from '../home/home.module';
import { AddPageModule } from '../add/add.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AddPageModule,
    MarketPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
