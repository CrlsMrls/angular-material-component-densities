import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'datepicker-example',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Choose a date</mat-label>
      <input matInput [matDatepicker]="picker" />
      <mat-hint>MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="picker">
      </mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  styles: [``],
  standalone: true,
  imports: [MatDatepickerModule, MatInputModule],
})
export class DatepickerExampleComponent {}
