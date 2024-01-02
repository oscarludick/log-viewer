import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TagsButtonGroupModule } from './tags-button-group/tags-button-group.module';

import { TagsComponent } from './tags.component';

@NgModule({
  imports: [TagsButtonGroupModule, MatFormFieldModule, MatButtonModule],
  declarations: [TagsComponent],
  exports: [TagsComponent],
})
export class TagsModule {}
