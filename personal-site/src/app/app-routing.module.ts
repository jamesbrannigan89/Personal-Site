import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { CollegeExperienceComponent } from './college-experience/college-experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'work-experience', component: WorkExperienceComponent},
  {path:'college-experience', component: CollegeExperienceComponent},
  {path:'portfolio',component:PortfolioComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
