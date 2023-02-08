import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'badge-example',
  templateUrl: 'badge-example.component.html',
  styleUrls: ['badge-example.component.scss'],
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule],
})
export class BadgeExampleComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
