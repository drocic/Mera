import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { StaticComponent } from './static/static.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'static', component: StaticComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);