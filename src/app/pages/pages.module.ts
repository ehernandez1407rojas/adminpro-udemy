import { NgModule } from "@angular/core";

import { SharesModule } from '../shared/shares.module';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';


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
        SharesModule,
        PAGES_ROUTES
      ]
})

export class PagesModule { }