## Use ngModel + MatCard + MatSlideToggle

Here we will use `mat-card` and `mat-slide-toggle` components from Angular Material.

### Step #8.1 Task:

Use two (2) `<mat-card>` components to display the **selectedUser** information. 

*  Use the `*ngIf` template directive to remove the requirement for 'safe navigation' operators in the html template.
*  Use **ngModel** two-way, data-binding for the `<mat-slide-toggle>` features.

> Note that we use `fxFlex="80"` so the 1st card fills 80% of the horizontal space.

##### File:  `src/app/app.component.html`

```html
<div class="content" fxLayout="row" fxLayout.sm="column" fxLayoutGap="16px">
  <mat-card fxFlex="80" *ngIf="selectedUser" >
    <mat-icon svgIcon="avatars:{{selectedUser.avatar}}" class="avatar"></mat-icon>
    <h2>{{selectedUser.name}}</h2>
    <p>{{selectedUser.details}}</p>
  </mat-card>

  <mat-card fxFlex fxLayout="column" fxLayoutGap="14px" >
    <mat-slide-toggle [(ngModel)]="selectedUser.isAdmin">Is Admin?</mat-slide-toggle>
    <mat-slide-toggle [(ngModel)]="selectedUser.isCool">Is Cool?</mat-slide-toggle>
  </mat-card>
</div>
```

> Note the use of responsive API `fxLayout.sm="column"` in the content area

![image](https://cloud.githubusercontent.com/assets/6004537/24765552/7d32dbf2-1ab5-11e7-886d-3eee6fa84ba6.png)

### Step #8.2: Add Module Imports

We also need to add `MdSlideToggleModule` and `MdCardModule` to our `MaterialModule`.

##### File: `src/app/material.module.ts`

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
```

### Step #8.3: Import FormsModule 

To use `NgModel` we need to add the template-driven `FormsModule` to our `AppModule`

##### File: `src/app/app.module.ts`

```js
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

### Tips

### 1. Flex-Layout
Using `fxLayout.sm="column"` tells the content to be a column container when the screen is small (breakpoint `960px`)

Specifying a gap between the different children can be done by using 
[`fxLayoutGap`](https://github.com/angular/flex-layout/wiki/Declarative-API-Overview) with a value of `16px`.

### 2. HammerJS

HammerJS handles all the user interactions and gestures for Material and simplifies the API.

Including the `hammerjs` package in our Angular application using Webpack.

##### File:  `src/app/app.module.ts`

```ts
import 'hammerjs';
```

---

[Go to Tutorial Step 8](./STEP_8.md)
