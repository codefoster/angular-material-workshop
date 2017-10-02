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
  MdDialogModule,
  MdSelectModule,
  MdCheckboxModule
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
    MdDialogModule,
    MdSelectModule,
    MdCheckboxModule
  ]
})
export class MaterialModule {}
