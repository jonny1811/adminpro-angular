import { NgModule } from '@angular/core';
import { PagesRoutes } from './pages.routes';
// Modulos
import { SharedModule } from './../shared/shared.module';
// Temporal
import { FormsModule } from '@angular/forms';
// Componentes Padres
import { PagesComponent } from './pages.component';
// Componentes Hijos
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Temporal
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PagesRoutes,
        FormsModule
    ]
})

export class PageModule { }
