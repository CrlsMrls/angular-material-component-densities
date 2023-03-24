import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'select-example',
  templateUrl: 'select-example.component.html',
  styleUrls: ['select-example.component.scss'],
  standalone: true,
  imports: [MatSelectModule, MatInputModule, ReactiveFormsModule, NgFor],
})
export class SelectExampleComponent {
  toppings = new FormControl('');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
}
