import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberListComponent} from "./features/member/pages/membre-list/member-list.component";
import {MemberAddEditComponent} from "./features/member/pages/membre-add-edit/member-add-edit.component";
import {FishListComponent} from "./features/fish/pages/fish-list/fish-list.component";
import {
  AddEditCompetitionComponent
} from "./features/Competition/pages/add-edit-competition/add-edit-competition.component";
import {ListCompetitionComponent} from "./features/Competition/pages/list-competition/list-competition.component";
import {AddHuntingComponent} from "./features/hunting/add-hunting/add-hunting.component";
import {RankingListComponent} from "./features/Ranking/ranking-list/ranking-list.component";

const routes: Routes = [
  {path:"CompetitionMembers", component: MemberListComponent},
  {path:"AddMember" , component:MemberAddEditComponent},
  {path:"fishes", component:FishListComponent},
  {path:"AddCompetition", component:AddEditCompetitionComponent},
  {path:"Competition-list", component:ListCompetitionComponent},
  {path:"AddHunting", component:AddHuntingComponent},
  {path:"Result", component:RankingListComponent},
  {path:"", component:ListCompetitionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
