import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

import 'hammerjs';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { UserListComponent } from './user-list/user-list.component';
import { CatCentralComponent } from './cat-central/cat-central.component';
import { CondoCrazeComponent } from './condo-craze/condo-craze.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    UserListComponent,
    CatCentralComponent,
    CondoCrazeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES /*, { preloadingStrategy: PreloadAllModules}*/),
    // Material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    // Flex-layout
    FlexLayoutModule
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
