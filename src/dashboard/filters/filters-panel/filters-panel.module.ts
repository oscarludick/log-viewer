import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FiltersPanelComponent } from './filters-panel.component';
import { FiltersPanelDirective } from './filters-panel.directive';

@NgModule({
  imports: [CommonModule, MatExpansionModule],
  declarations: [FiltersPanelComponent, FiltersPanelDirective],
  exports: [FiltersPanelComponent, FiltersPanelDirective],
})
export class FiltersPanelModule {}
