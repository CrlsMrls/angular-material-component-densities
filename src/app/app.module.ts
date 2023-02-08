import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DensityIntroComponent } from './intro.component';

import { MaterialModule } from './material.module';

import { MaterialListComponent } from './material/list.component';
import { TreeNestedOverviewExample } from './material/tree/tree-nested-overview-example';

@NgModule({
  declarations: [AppComponent, DensityIntroComponent],
  imports: [
    BrowserModule,
    MaterialListComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
