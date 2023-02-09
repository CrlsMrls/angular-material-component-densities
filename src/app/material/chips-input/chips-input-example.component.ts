import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

interface Fruit {
  name: string;
}

@Component({
  selector: 'chips-input-example',
  templateUrl: './chips-input-example.component.html',
  styles: [
    `
      .example-chip-list {
        width: 100%;
        margin-top: 30px;
      }
    `,
  ],
  standalone: true,
  imports: [MatChipsModule, MatFormFieldModule, MatIconModule, NgFor],
})
export class ChipsInputExampleComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
}
