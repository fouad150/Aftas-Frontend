import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MembreListComponent} from "./features/member/pages/membre-list/membre-list.component";
import {MembreAddEditComponent} from "./features/member/pages/membre-add-edit/membre-add-edit.component";
import {FishListComponent} from "./features/fish/pages/fish-list/fish-list.component";
import {FishAddEditComponent} from "./features/fish/pages/fish-add-edit/fish-add-edit.component";
import {
  AddEditCompetitionComponent
} from "./features/Competition/pages/add-edit-competition/add-edit-competition.component";
import {ListCompetitionComponent} from "./features/Competition/pages/list-competition/list-competition.component";

const routes: Routes = [
  {path:"members", component: MembreListComponent},
  {path:"AddMember" , component:MembreAddEditComponent},
  {path:"fishes", component:FishListComponent},
  {path:"Addfish", component:FishAddEditComponent},
  {path:"AddCompetition", component:AddEditCompetitionComponent},
  {path:"listCompetition", component:ListCompetitionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
