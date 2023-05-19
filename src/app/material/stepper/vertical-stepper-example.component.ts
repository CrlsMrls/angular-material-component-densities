import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'vertical-stepper-example',
  template: `
    <mat-stepper #stepper orientation="vertical">
      <mat-step>
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Last name, First name" required />
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </mat-step>
      <mat-step label="Fill out your address">
        <mat-form-field appearance="fill">
          <mat-label>Address</mat-label>
          <input matInput placeholder="Ex. 1 Main St, New York, NY" required />
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Done</ng-template>
        <p>You are now done.</p>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: [``],
  standalone: true,
  imports: [MatStepperModule, MatInputModule, MatButtonModule],
})
export class VerticalStepperExampleComponent {}
