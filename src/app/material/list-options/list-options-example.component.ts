import { NgFor, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'list-options-example',
  template: `<mat-list>
    <div mat-subheader>Folders</div>
    <mat-list-item *ngFor="let folder of folders">
      <mat-icon matListItemIcon>folder</mat-icon>
      <div matListItemTitle>{{ folder.name }}</div>
      <div matListItemLine>{{ folder.updated | date }}</div>
    </mat-list-item>
    <mat-divider></mat-divider>
    <div mat-subheader>Notes</div>
    <mat-list-item *ngFor="let note of notes">
      <mat-icon matListItemIcon>note</mat-icon>
      <div matListItemTitle>{{ note.name }}</div>
    </mat-list-item>
  </mat-list>`,
  styles: [``],
  standalone: true,
  imports: [MatListModule, MatDividerModule, NgFor, DatePipe, MatIconModule],
})
export class ListOptionsExampleComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}
