import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatSlideToggleModule,
  MatCardModule
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
    MatCardModule
  ]
})
export class MaterialModule {}
