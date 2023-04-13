import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';

import { TabsExampleComponent } from './tabs/tabs-example.component';
import { MatCardModule } from '@angular/material/card';
import { TreeNestedOverviewExample } from './tree/tree-nested-overview-example';
import { InputExampleComponent } from './input/input-example.component';
import { ListExampleComponent } from './list/list-example.component';
import { ChipsExampleComponent } from './chips/chips-example.component';
import { StepperExampleComponent } from './stepper/stepper-example.component';
import { ExpansionPanelExampleComponent } from './expansion-panel/expansion-panel-example.component';
import { DatepickerExampleComponent } from './datepicker/datepicker-example.component';
import { DialogExampleComponent } from './dialog/dialog-example.component';
import { CheckboxExample } from './checkbox/checkbox-example.component';
import { SlideToggleExampleComponent } from './slide/slide-example.component';
import { MatDividerModule } from '@angular/material/divider';
import { BadgeExampleComponent } from './badge/badge-example.component';
import { SliderExampleComponent } from './slider/slider-example.component';
import { CommonModule } from '@angular/common';
import { ChipsInputExampleComponent } from './chips-input/chips-input-example.component';
import { TableExampleComponent } from './table/table-example.component';
import { SelectExampleComponent } from './select/select-example.component';
import { ListOptionsExampleComponent } from './list-options/list-options-example.component';

@Component({
  selector: 'material-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [
    TabsExampleComponent,
    InputExampleComponent,
    TreeNestedOverviewExample,
    ListExampleComponent,
    ListOptionsExampleComponent,
    ChipsExampleComponent,
    ChipsInputExampleComponent,
    StepperExampleComponent,
    ExpansionPanelExampleComponent,
    DatepickerExampleComponent,
    DialogExampleComponent,
    CheckboxExample,
    SelectExampleComponent,
    SlideToggleExampleComponent,
    BadgeExampleComponent,
    SliderExampleComponent,
    TableExampleComponent,
    /// material components
    MatCardModule,
    MatDividerModule,
    CommonModule,
    // Angular components
    NgFor,
  ],
  standalone: true,
})
export class MaterialListComponent {}
