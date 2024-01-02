import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TagData } from '../../../core/services/state.service';

@Component({
  selector: 'app-filters-checkbox',
  template: `
    <li>
      <mat-checkbox [checked]="filter.checked" (change)="onChecked.emit($event)">
        <span>{{filter.label}}</span><span class="app-spacer"></span><span>{{filter.count}}</span>
      </mat-checkbox>
      
    </li>
  `,
})
export class FiltersCheckboxComponent {
  @Input()
  public readonly filter!: TagData;

  @Output()
  public readonly onChecked = new EventEmitter<MatCheckboxChange>();
}
