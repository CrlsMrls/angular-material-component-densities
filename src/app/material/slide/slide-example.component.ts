import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'slide-toggle-example',
  template: `<mat-slide-toggle>Slide me!</mat-slide-toggle>`,
  standalone: true,
  imports: [MatSlideToggleModule],
})
export class SlideToggleExampleComponent {}
