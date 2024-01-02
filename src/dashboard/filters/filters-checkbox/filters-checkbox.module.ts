import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FiltersCheckboxComponent } from './filters-checkbox.component';

@NgModule({
  imports: [MatCheckboxModule],
  declarations: [FiltersCheckboxComponent],
  exports: [FiltersCheckboxComponent],
})
export class FiltersCheckboxModule {}
