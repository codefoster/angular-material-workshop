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
  MdMenuModule
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
    MdMenuModule
  ]
})
export class MaterialModule {}
