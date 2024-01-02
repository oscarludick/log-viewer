import { Component, ContentChildren, QueryList } from '@angular/core';
import { FiltersPanelDirective } from './filters-panel.directive';

@Component({
  selector: 'app-filters-panel',
  template: `
    <mat-accordion>
      @for (panel of panels.toArray(); track panel) {
        <mat-expansion-panel togglePosition="before">
          <mat-expansion-panel-header>
            @if(panel.title) {
              <mat-panel-title>
                {{panel.title}}
              </mat-panel-title>
            }
            @if(panel.description) {
              <mat-panel-description>
                ({{panel.description}})
              </mat-panel-description>
            }
          </mat-expansion-panel-header>
          <ng-template [ngTemplateOutlet]="panel.template"></ng-template>
        </mat-expansion-panel>
      }
    </mat-accordion>
  `,
  styles: ``,
})
export class FiltersPanelComponent {
  @ContentChildren(FiltersPanelDirective)
  public readonly panels!: QueryList<FiltersPanelDirective>;
}
