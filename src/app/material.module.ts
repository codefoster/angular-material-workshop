import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTabsModule,
  MdListModule,
  MdIconModule,
  MdSlideToggleModule,
  MdCardModule,
  MdMenuModule,
  MdDialogModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdIconModule,
    MdSlideToggleModule,
    MdCardModule,
    MdMenuModule,
    MdDialogModule
  ]
})
export class MaterialModule {}
