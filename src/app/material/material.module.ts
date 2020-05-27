
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {MatBadgeModule} from '@angular/material/badge';
import { MatInputModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {  MatDialogModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';



const MaterialComponent =[
  NoopAnimationsModule,
  MatTabsModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatProgressBarModule,
  MatMenuModule,
  MatBadgeModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule

];


@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
