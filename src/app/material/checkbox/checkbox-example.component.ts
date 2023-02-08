import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'checkbox-example',
  templateUrl: 'checkbox-example.component.html',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatRadioModule],
})
export class CheckboxExample {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
