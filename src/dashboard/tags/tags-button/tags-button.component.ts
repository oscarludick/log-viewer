import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-tags-button',
  template: `
  <mat-chip>
    {{label}}
    @if(removable) {
      <button matChipRemove (click)="onRemove.emit(label)">
        <mat-icon>cancel</mat-icon>
      </button>
    }
  </mat-chip>
  `,
  styles: `
    .mat-mdc-standard-chip {
        --mdc-chip-container-shape-radius: 0;
        --mdc-chip-elevated-container-color: #222222;
        --mdc-chip-label-text-color: white;
        margin-top: 0px !important;
        margin-left: 0px !important;
        margin-bottom: 0px !important;
      }
      :host(.removable) {
        .mat-mdc-standard-chip  {
        --mdc-chip-elevated-container-color: #aab2b6 !important;
        --mdc-chip-label-text-color: black !important;
      }
    }
    .mat-mdc-chip.mat-mdc-standard-chip {
      --mdc-chip-container-height: 20px;
    }
  `,
})
export class TagsButtonComponent {
  @Input()
  label!: string;

  @Input()
  removable!: boolean;

  @Output()
  onRemove = new EventEmitter<string>();

  @HostBinding('class.removable')
  protected get removableClass() {
    return this.removable;
  }
}
