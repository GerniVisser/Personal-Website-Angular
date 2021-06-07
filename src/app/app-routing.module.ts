import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { GitHubComponent } from './Features/git-hub/git-hub.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'projects/:id', component: GitHubComponent},
  {path: '**', component: HomePageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
