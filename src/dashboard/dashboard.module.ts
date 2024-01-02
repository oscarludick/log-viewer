import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard.component';
import { FiltersModule } from './filters/filters.module';
import { LoggerModule } from './logger/logger.module';
import { TagsModule } from './tags/tags.module';

@NgModule({
  imports: [TagsModule, FiltersModule, LoggerModule, MatGridListModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
