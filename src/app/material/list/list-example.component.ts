import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'list-example',
  template: ` <mat-selection-list #shoes>
      <mat-list-option *ngFor="let shoe of typesOfShoes">
        {{ shoe }}
      </mat-list-option>
    </mat-selection-list>

    <p>Options selected: {{ shoes.selectedOptions.selected.length }}</p>`,
  styles: [``],
  standalone: true,
  imports: [MatListModule, NgFor],
})
export class ListExampleComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
}
