import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MercyDashboardComponent } from './mercy-dashboard/mercy-dashboard.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTreeModule,
  MatDividerModule
} from '@angular/material';
import { MercyNavComponent } from './mercy-nav/mercy-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { SwitchmapUsecaseComponent } from './switchmap-usecase/switchmap-usecase.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MercyDashboardComponent,
    MercyNavComponent,
    SideNavMenuComponent,
    SwitchmapUsecaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,

    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
