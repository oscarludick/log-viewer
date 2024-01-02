import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FiltersCheckboxesModule } from './filters-checkboxes/filters-checkboxes.module';
import { FiltersPanelModule } from './filters-panel/filters-panel.module';
import { FiltersComponent } from './filters.component';

@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    FiltersPanelModule,
    FiltersCheckboxesModule,
  ],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class FiltersModule {}
