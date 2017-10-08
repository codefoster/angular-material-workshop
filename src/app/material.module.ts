import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatSlideToggleModule,
  MatCardModule,
  MatMenuModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
