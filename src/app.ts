import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { StateService } from './core/services/state.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',

  template: `
    <mat-toolbar>
      <span>[LogViewer]</span>
      <span class="app-spacer"></span>
      <button mat-button aria-label="Upload Log">
        <span>Upload</span>
      </button>
    </mat-toolbar>
    <mat-divider></mat-divider>
    <app-dashboard></app-dashboard>
  `,
})
export class App {
  name = 'Angular';
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    DashboardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [StateService],
  declarations: [App],
  bootstrap: [App],
})
export class AppModule {}
