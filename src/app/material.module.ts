import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule {}
