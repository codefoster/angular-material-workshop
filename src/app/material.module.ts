import {NgModule} from '@angular/core';
import {
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule
  ]
})
export class MaterialModule {}
