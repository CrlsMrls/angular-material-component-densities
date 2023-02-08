import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'slider-example',
  templateUrl: './slider-example.component.html',
  styleUrls: ['./slider-example.component.scss'],
  standalone: true,
  imports: [MatSliderModule, MatCheckboxModule, FormsModule],
})
export class SliderExampleComponent {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
}
