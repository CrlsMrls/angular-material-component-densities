import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'chips-example',
  template: `
    <p>Note. density -3 is not applied for the <em>mat-chip</em> component</p>
    <mat-chip-listbox aria-label="Dog selection">
      <mat-chip>
        <img
          matChipAvatar
          src="https://material.angular.io/assets/img/examples/shiba1.jpg"
          alt="Photo of a Shiba Inu"
        />
        Dog one
      </mat-chip>
      <mat-chip color="primary">
        <img
          matChipAvatar
          src="https://material.angular.io/assets/img/examples/shiba1.jpg"
          alt="Photo of a Shiba Inu"
        />
        Dog two
      </mat-chip>
      <mat-chip color="accent">
        <img
          matChipAvatar
          src="https://material.angular.io/assets/img/examples/shiba1.jpg"
          alt="Photo of a Shiba Inu"
        />
        Dog three
      </mat-chip>
    </mat-chip-listbox>
  `,
  styles: [``],
  standalone: true,
  imports: [MatChipsModule],
})
export class ChipsExampleComponent {}
