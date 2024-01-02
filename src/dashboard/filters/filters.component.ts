import { Component, inject } from '@angular/core';
import { StateService, Tag, TagData } from '../../core/services/state.service';

@Component({
  selector: 'app-filters',
  template: `
    <div class="app-filters">
      <mat-toolbar>
        <mat-icon fontIcon="filter_list"></mat-icon>
        <span>FILTER</span>
      </mat-toolbar>
      <app-filters-panel>
        <ng-template title="Levels" [description]="state.levels().count" appFiltersPanel>
          <app-filters-checkboxes [filters]="state.levels()" (onChecked)="onLevel($event)"></app-filters-checkboxes>  
        </ng-template>
        <ng-template title="Types" [description]="state.types().count"  appFiltersPanel>
          <app-filters-checkboxes [filters]="state.types()" (onChecked)="onType($event)"></app-filters-checkboxes>  
        </ng-template>
        <ng-template title="Tags" [description]="state.tags().count" appFiltersPanel>
          <app-filters-checkboxes [filters]="state.tags()" (onChecked)="onTag($event)"></app-filters-checkboxes>  
        </ng-template>
      </app-filters-panel>      
    </div>
    `,
  styles: `
    .mat-toolbar {
      --mat-toolbar-title-text-size: 12px;
    }
    .app-filters {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `,
  host: {
    style: 'width: 100%;',
  },
})
export class FiltersComponent {
  public readonly state = inject(StateService);

  public onLevel(level: TagData): void {
    this.state.updateLevel(level);
  }

  public onType(type: TagData): void {
    this.state.updateType(type);
  }

  public onTag(tag: TagData): void {
    this.state.updateTag(tag);
  }
}
