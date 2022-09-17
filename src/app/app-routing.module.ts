import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { LoginComponent } from './components/login/login.component';
import { MotherComponent } from './components/mother/mother.component';
import { EditProyectoComponent } from './components/projcts/edit-proyecto.component';
import { NewProjectComponent } from './components/projcts/new-project.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  {path:'', component:MotherComponent} ,
  {path:'login', component:LoginComponent},
  {path:'newexp', component: NewExperienceComponent},
  {path:'editexp/:id', component: EditExperienceComponent},
  {path:'newedu', component:NewEducationComponent},
  {path:'editedu/:id', component: EditEducationComponent},
  {path:'newskl', component:NewSkillsComponent},
  {path:'editskl/:id', component:EditSkillsComponent},
  {path:'newpry', component:NewProjectComponent},
  {path:'editpry/:id', component:EditProyectoComponent},
  {path:'editabt/:id', component:EditAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
