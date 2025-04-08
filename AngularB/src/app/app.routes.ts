import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ContainerComponent } from './Component/container/container.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'Container',
        component:ContainerComponent
    }
    
];
