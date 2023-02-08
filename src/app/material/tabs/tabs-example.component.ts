import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'tabs-example',
  imports: [MatTabsModule],
  standalone: true,
  template: ` <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
      <mat-tab label="First">Content 1</mat-tab>
      <mat-tab label="Second">Content 2</mat-tab>
      <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>

    <mat-tab-group mat-stretch-tabs="true">
      <mat-tab label="First">Content 1</mat-tab>
      <mat-tab label="Second">Content 2</mat-tab>
      <mat-tab label="Third">Content 3</mat-tab>
    </mat-tab-group>`,
})
export class TabsExampleComponent {}
