import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfessionalDevelopmentComponent } from './professional-development/professional-development.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    SummaryComponent,
    SkillsComponent,
    ProfessionalDevelopmentComponent,
    ExperienceComponent,
    EducationComponent,
    ActivitiesComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
