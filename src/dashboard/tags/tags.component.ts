import { Component, computed, inject } from '@angular/core';
import { StateService, Tag, TagData } from '../../core/services/state.service';

@Component({
  selector: 'app-tags',
  template: `
  <div class="app-tags">
    <span>CHECKED : ({{state.filters().count}})</span>
    <div class="app-tags__container">
      <app-tags-button-group label="Active" [tags]="state.filters().data" (onRemove)="onRemove($event)">
      </app-tags-button-group>
    </div>
    <button (click)="onClearAll()" mat-button aria-label="Clear All">
        <span>Clear all</span>
    </button>
  </div>  
  `,
  styles: `
    .app-tags {
      align-items: center;
      display: flex;
      width: 100vw;
      margin: 5px 0px;
      max-height: 40px;
    }
    .app-tags__container {
      width: 80%;
      display: flex;
      flex-direction: column;
    }
  `,
})
export class TagsComponent {
  public readonly state = inject(StateService);

  public onClearAll(): void {
    this.state.updateAll(false);
  }

  public onRemove(label: string): void {
    console.log(label);
  }
}
