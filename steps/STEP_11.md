## Dialogs with Forms

Let's create a user editor `form` inside of the Angular Material dialog.

#### Step #11.1: Dialog Template + Form

The *template-driven* form will contain different Material components; each with a `ngModel` directive on it. 
All components that are registered through `ngModel` and have an according `name` attribute will be included in the form's value. 

As soon as a `<form>` element is placed inside of a component, Angular will create an Angular form
automatically. Once the form is valid and the form is being submitted, the form's value can be delivered
back to the `AppComponent` and added to the array of `users`.

> Note: `form` is actually a selector for the ngForm Directive. 

##### File: `src/app/admin/user.dialog.component.html`

```html
<h3>Add User Dialog</h3>
<form #form="ngForm" (ngSubmit)="dialogRef.close(form.value)" ngNativeValidate>
    <div fxLayout="row" fxLayoutAlign="start center">
      <mat-icon svgIcon="avatars:{{selectedAvatar}}" class="avatar"></mat-icon>
      <mat-select name="avatar" fxFlex placeholder="Avatar" [(ngModel)]="selectedAvatar">
        <mat-option *ngFor="let avatar of avatars; let i = index;" [value]="avatar">Avatar - {{i + 1}}</mat-option>
      </mat-select>
    </div>
    <mat-input-container>
      <input matInput ngModel name="name" placeholder="Full name" required>
    </mat-input-container>

    <mat-input-container>
      <textarea matInput ngModel name="details" placeholder="Details" rows="15" cols="60" required></textarea>
    </mat-input-container>

    <div fxLayout="row" fxLayoutGap="24px">
      <mat-checkbox ngModel name="isAdmin">Is Admin?</mat-checkbox>
      <mat-checkbox ngModel name="isCool">Is Cool?</mat-checkbox>
    </div>

    <mat-dialog-actions align="end">
      <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
      <button mat-button color="accent">Save User</button>
    </mat-dialog-actions>
</form>
```


#### Step #11.2: Using MatDialogRef

Use the `MatDialogRef` token to close and deliver data back to the origin component.

For components that are opened through the `MatDialog` service, the `MatDialogRef` can be injected
using Dependency Injection. 

##### File:  `src/app/dialog/dialog.component.ts`

```js
import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  templateUrl: './user.dialog.component.html'
})
export class AdminDialogComponent {
  avatars = new Array(16).fill(0).map((_, i) => `svg-${i + 1}`);
  selectedAvatar = this.avatars[0];

  constructor(public dialogRef: MatDialogRef<AdminDialogComponent>) {}
}
```

#### Step #11.2: Observables with Dialog Responses

When opening a dialog using the `MatDialog` service, there will be a `afterClosed()` observable
that will contain the result data from the `MatDialogRef`.

##### File: `src/app/app.component.ts`

```js
this.dialogs
    .open(AdminDialogComponent)
    .afterClosed()
    .filter(result => !!result)
    .subscribe(user => {
      // Add new user
      this.users.push(user);
      this.selectedUser = user;
    });
```

> NOTE: do not forget to import the RxJS `filter` operator.
```js
import 'rxjs/add/operator/filter';
```

#### Step #11.3: Shadow-Dom Piercing

Currently the `avatar` icon in the dialog does not have the styles from the `avatar` class.

This is due to the fact that Angular encapsulates the selectors in components. Using the `/deep/` 
prefix will ensure that the selector also matches elements outside of the current component.

##### File: `src/app/app.component.css`

```css
/deep/ .avatar {
  overflow: hidden;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 12px;
}
```

#### Step #11.3: Import Component Modules

We also need to add `MatFormFieldModule`, `MatInputModule`, `MatSelectModule` and `MatCheckboxModule` to our `MaterialModule`.

##### File: `src/app/material.module.ts`

```js
import {NgModule} from '@angular/core';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [
   MatFormFieldModule,
   MatSelectModule,
   MatInputModule,
   MatCheckboxModule
  ]
})
export class MaterialModule {}
```

---

[Go to Tutorial Step 12](STEP_12.md)
