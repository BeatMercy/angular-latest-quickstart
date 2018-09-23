import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MercyDashboardComponent } from 'src/app/mercy-dashboard/mercy-dashboard.component';
import { SwitchmapUsecaseComponent } from 'src/app/switchmap-usecase/switchmap-usecase.component';

const appRoutes = [
    { path: '', component: MercyDashboardComponent },
    { path: 'usecase/switchMap', component: SwitchmapUsecaseComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
