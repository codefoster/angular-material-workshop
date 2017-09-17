## Dialogs

Creating an Angular Material dialog.

### Step #12.1: MatFab Button

Let's add a FAB button that will be used to open an Admin dialog.

###### File: `src/app/app.component.html`

```html
  <button mat-fab (click)="openAdminDialog()" class="fab-bottom-right">
    <mat-icon>add</mat-icon>
  </button>
```

> Add this button to the bottom of the html template.

With these ^ settings, a `fab` button at the bottom-right will be created.
Clicks will trigger calls to open an Angular Material dialog.

### Step #12.1: Fab Button Styling

The `fab` button needs some styling to place it in the right spot.

###### File:  `src/app/app.component.css`


```css
.fab-bottom-right {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 100;
}
```

### Step #12.2: Defining a Custom dialog

A dialog can be just a normal Angular component. You can use specific directives 
like `mat-dialog-title`, `mat-dialog-content` or `mat-dialog-actions` to style your dialog.

##### File:  `src/app/dialog/dialog.component.ts`

```js
import {Component} from '@angular/core';

@Component({
  template: `
    <h3 mat-dialog-title>Admin Dialog</h3>
    
    <mat-dialog-content>
      This is the admin dialog.
    </mat-dialog-content>  
  `
})
export class AdminDialogComponent {}
```

### Step #12.3: Register Custom Dialog

Angular would not be able to compile the `DialogComponent` when calling `openAdminDialog` because
the dialog component is not part of the given `NgModule`.

##### File: `src/app/app.module.ts`

```js
import {AdminDialogComponent} from './dialog/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDialogComponent
  ],
  entryComponents: [AdminDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step #12.4: Opening the custom dialog

To be able to show dialogs, the `MatDialog` service needs to be injected. A function that is 
referenced from the template will then open the dialog.

> The `AdminDialogComponent` is also an **entryComponent** because it is not static referenced by any selectors in any other component templates.

###### File:  `src/app/app.component.ts`

```js
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {MatIconRegistry, MatDialog} from '@angular/material';

import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialogs: MatDialog) {
  }

  openAdminDialog() {
    this.dialogs.open(DialogComponent);
  }
}
```

### Step #12.5: Import MatDialogModule

We also need to add `MatDialogModule` to our `MaterialModule`.

#####4 File: `src/app/material.module.ts`

```js
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

```

---

[Go to Tutorial Step 11](STEP_11.md)
