import { SharedModule } from './../shared/shared.module';
// Modulos
import { NgModule } from '@angular/core';
// Componentes Padres
import { PagesComponent } from './pages.component';
// Componentes Hijos
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
// Rutas Hijas
import { PagesRoutes } from './pages.routes';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PagesRoutes
    ]
})

export class PageModule { }
