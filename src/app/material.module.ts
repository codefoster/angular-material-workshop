import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdMenuModule,
  MdTabsModule,
  MdListModule,
  MdCardModule,
  MdSlideToggleModule,
  MdSelectModule,
  MdDialogModule,
  MdCheckboxModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdListModule,
    MdCardModule,
    MdSlideToggleModule,
    MdSelectModule,
    MdDialogModule,
    MdCheckboxModule,
    MdInputModule
  ]
})
export class MaterialModule {}
