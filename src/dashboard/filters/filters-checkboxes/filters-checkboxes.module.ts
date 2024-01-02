import { NgModule } from '@angular/core';
import { FiltersCheckboxModule } from '../filters-checkbox/filters-checkbox.module';
import { FiltersCheckboxesComponent } from './filters-checkboxes.component';

@NgModule({
  imports: [FiltersCheckboxModule],
  declarations: [FiltersCheckboxesComponent],
  exports: [FiltersCheckboxesComponent],
})
export class FiltersCheckboxesModule {}
