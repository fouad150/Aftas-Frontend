import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './features/member/pages/membre-list/member-list.component';
import {
  MemberAddEditComponent,
} from './features/member/pages/membre-add-edit/member-add-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FishListComponent } from './features/fish/pages/fish-list/fish-list.component';
import { AddEditCompetitionComponent } from './features/Competition/pages/add-edit-competition/add-edit-competition.component';
import { ListCompetitionComponent } from './features/Competition/pages/list-competition/list-competition.component';
import { AddHuntingComponent } from './features/hunting/add-hunting/add-hunting.component';
import { RankingListComponent } from './features/Ranking/ranking-list/ranking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberAddEditComponent,
    FishListComponent,
    AddEditCompetitionComponent,
    ListCompetitionComponent,
    AddHuntingComponent,
    RankingListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
