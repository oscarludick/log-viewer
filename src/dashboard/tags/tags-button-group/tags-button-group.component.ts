import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagData } from '../../../core/services/state.service';

@Component({
  selector: 'app-tags-button-group',
  template: `
  <div class="app-tags-button-group">
    <mat-chip-listbox >
      @if(tags.length !== 0){
        <app-tags-button [removable]='false' [label]="label"></app-tags-button>
      }
      @for (tag of tags; track tag) {
        <app-tags-button [removable]='true' [label]="tag.label" (onRemove)="onRemove.emit($event)">
        </app-tags-button>
      }
    </mat-chip-listbox >
  </div>
  `,
  styles: `
   .app-tags-button-group {
      margin-right: 10px;
      margin-left: 18px;
      margin-bottom: 3px
   }
 `,
})
export class TagsButtonGroupComponent {
  @Input()
  tags!: TagData[];

  @Input()
  label!: string;

  @Output()
  onRemove = new EventEmitter<string>();
}
