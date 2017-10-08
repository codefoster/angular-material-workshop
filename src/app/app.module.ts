import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';

import {AppComponent} from './app.component';
import {AdminDialogComponent} from './admin/user.dialog.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent, AdminDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [ AdminDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {}
