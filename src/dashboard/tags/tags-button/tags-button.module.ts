import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TagsButtonComponent } from './tags-button.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, MatChipsModule],
  declarations: [TagsButtonComponent],
  exports: [TagsButtonComponent],
})
export class TagsButtonModule {}
