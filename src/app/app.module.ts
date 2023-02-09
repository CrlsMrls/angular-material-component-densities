import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DensityIntroComponent } from './intro.component';
import { MaterialModule } from './material.module';

import { MaterialListComponent } from './material/list.component';

@NgModule({
  declarations: [AppComponent, DensityIntroComponent],
  imports: [
    BrowserModule,
    MaterialListComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatToolbarModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
