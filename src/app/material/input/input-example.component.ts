import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss'],
  standalone: true,
  imports: [MatInputModule],
})
export class InputExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
