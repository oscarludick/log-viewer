import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { TagsButtonModule } from '../tags-button/tags-button.module';
import { TagsButtonGroupComponent } from './tags-button-group.component';

@NgModule({
  imports: [CommonModule, MatChipsModule, TagsButtonModule],
  declarations: [TagsButtonGroupComponent],
  exports: [TagsButtonGroupComponent],
})
export class TagsButtonGroupModule {}
