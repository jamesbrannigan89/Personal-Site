import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollegeExperienceComponent } from './college-experience/college-experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'', component: HomeComponent,data: { animationState: 'One' }},
  {path:'about', component: AboutComponent,data: { animationState: 'Two' }},
  {path:'college-experience', component: CollegeExperienceComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'work-experience', component: WorkExperienceComponent},
  {path:'contact', component: ContactComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
