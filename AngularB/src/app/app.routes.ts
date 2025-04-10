import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ContainerComponent } from './Component/container/container.component';
import { ModalComponent } from './Component/modal/modal.component';
import { BgNavComponent } from './Component/Background/bg-nav/bg-nav.component';
import { BgOneComponent } from './Component/Background/bg-one/bg-one.component';
import { ButtonsComponent } from './Component/buttons/buttons.component';
import { BgTwoComponent } from './Component/Background/bg-two/bg-two.component';

export const routes: Routes = [
    {
        path:'button',
        component:ButtonsComponent
    },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'Container',
        component:ContainerComponent
    },
    {
        path:'Modal',
        component:ModalComponent
    },
    {
        path:"background",
        component:BgNavComponent,
        children:[{
            path:'Bg-one',
            component:BgOneComponent
        },
        {
            path:'Bg-two',
            component:BgTwoComponent
        }
        ]
    }
    
];
