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
  MatMenuModule
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
    MatMenuModule
  ]
})
export class MaterialModule {}
