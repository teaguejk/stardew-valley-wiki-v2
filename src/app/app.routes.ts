import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuickstartComponent } from './components/quickstart/quickstart.component';
import { SkillsComponent } from './components/skills/skills.component';

export const routes: Routes = [
    {'path':'home', component:HomeComponent},
    {'path':'start', component:QuickstartComponent},
    {'path':'skills', component:SkillsComponent}
];
