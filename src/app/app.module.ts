import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatSelectModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatTableModule,
  MatRadioModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatDialogModule
} from '@angular/material';
import { SwiperModule } from 'ngx-useful-swiper';

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatTabsModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTableModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatRadioModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatSortModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,

    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
