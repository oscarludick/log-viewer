import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StateService } from '../../core/services/state.service';

@Component({
  selector: 'app-logger',
  template: `
    <div class="app-logger">
      <div class="app-logger__header">
        
          <mat-form-field appearance="outline">
  <mat-label>  <mat-icon matSuffix>search</mat-icon> Filter elements</mat-label>

  <input matInput (keyup)="applyFilter($event)" placeholder="Serach by level, type, tags, etc..." #input>
</mat-form-field>
      </div>

      <table mat-table [dataSource]="dataSource" class="mat-elevation-z0">
        <ng-container matColumnDef="label">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let element">
            <div class="app-logger-row">
              <div class="app-logger-date">
                <span class="">{{element.date}}</span>
                <span class="">{{element.time}}</span>
              </div>

              <div class="app-logger-description">
                <div class="app-logger-description__header">
                  <h5 class="app-logger-description__title">{{element.type}}</h5>
                  <div class="app-logger-description__tags">
                    <mat-chip-set >
                    <mat-chip>
                          {{element.tag}}
                      </mat-chip>
                      <mat-chip>
                          {{element.level}}
                      </mat-chip>
                    </mat-chip-set>
                  </div>
                </div>
                <span class="app-logger-description__message">{{element.message}}</span>
              </div>

              <div class="app-logger-row__next">
                <span>></span>
              </div>
            </div>
          </td>
        </ng-container>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <mat-paginator [pageSizeOptions]="[8, 16, 24]"
                 showFirstLastButtons
                 aria-label="Select page of periodic elements">
      </mat-paginator>
    </div>
  `,
  styles: `
    .app-logger{
      overflow: auto;
      max-height: 500px
    }
    .app-logger__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 80px;
      padding: 8px;
    }        
    .mat-mdc-row:nth-child(odd){
        background-color: #212121;
    }
    .app-logger-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .app-logger-date {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .app-logger-description {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .app-logger-description__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .app-logger-description__title {
      margin: 0px;
      padding: 0px
    }
    .app-logger-description__tags {
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
    .app-logger-description__message {
      color: #aab2b6;
      max-width: 500px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .app-logger-row__next {
      width: 5%;
    }

    .mat-mdc-standard-chip {
        --mdc-chip-elevated-container-color: grey;
        --mdc-chip-label-text-color: white;
      }
    }
    .mat-mdc-chip.mat-mdc-standard-chip {
      --mdc-chip-container-height: 20px;
    }
  `,
  host: {
    style: 'width: 100%',
  },
})
export class LoggerComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public readonly displayedColumns: string[] = ['label'];

  public readonly state = inject(StateService);

  public readonly dataSource = new MatTableDataSource(this.state.logger().data);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
