import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Tag, TagData } from '../../../core/services/state.service';

@Component({
  selector: 'app-filters-checkboxes',
  template: `
    <section>
      <ul>
        @for (filter of filters.data; track filter) {
          <app-filters-checkbox [filter]="filter" (onChecked)="onFilter($event, filter)"></app-filters-checkbox>
        }
      </ul>
    </section>
  `,
  styles: `
    ul {
      list-style-type: none;
      padding-inline-start: 0px;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  `,
})
export class FiltersCheckboxesComponent {
  @Input()
  public readonly filters!: Tag;

  @Output()
  public readonly onChecked = new EventEmitter<TagData>();

  onFilter(event: MatCheckboxChange, { label }: TagData): void {
    this.onChecked.emit({ label, checked: event.checked });
  }
}
