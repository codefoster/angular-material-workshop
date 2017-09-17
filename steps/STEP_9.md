## MatMenu Component + Dark Themes

Let's Add a dark theme and a menu with a button to toggle the theme.
 
### Step #11.1: Define *dark-theme* 

Using the Angular Material [Guidelines for Multiple Themes](https://github.com/angular/material2/blob/master/guides/theming.md#example-of-defining-multiple-themes),
we will define a *dark-theme* for any component in a container with `class="dark-theme"`.

##### File: `src/theme.scss`

```scss
@import '~@angular/material/_theming';

@include mat-core();

$primary : mat-palette($mat-red);
$accent  : mat-palette($mat-blue);
$theme   : mat-light-theme($primary, $accent);

@include angular-material-theme($theme);

.dark-theme {
  $dark-primary: mat-palette($mat-light-blue);
  $dark-accent : mat-palette($mat-green);
  $dark-theme  : mat-dark-theme($dark-primary, $dark-accent);

  @include angular-material-theme($dark-theme);
}
```

### Step #11.2: Use `<mat-menu>`

Let's add a menu button in the toolbar; right-aligned with a flexible `<span>`. 

Also notice  we're using `mat-icon` again, but this time we're passing a font ligature name that will be 
resolved from the Material Icons fonts; which were imported in the [`styles.css`](https://github.com/EladBezalel/material2-start/blob/workshop/src/styles.css#L1).

> See the full list of icons ligatures [here](https://material.io/icons/)

##### File: `src/app/app.component.html`

```html
  <mat-toolbar color="primary">
    <span>Angular Material</span>

    <span fxFlex></span>

    <button mat-icon-button [matMenuTriggerFor]="themeMenu">
      <mat-icon>more_vert</mat-icon>
    </button>
  </mat-toolbar>
```

> Above we have a button with `[mdMenuTriggerFor]` attribute that points to a menu instance to open.

Now let's add the menu with a template reference **`#themeMenu`**. 


##### File: `src/app/app.component.html`

```html
<div fxLayout="column" fxFlex [class.dark-theme]="isDarkTheme">

  <mat-menu #themeMenu x-position="before">
    <button mat-menu-item (click)="isDarkTheme = !isDarkTheme">Toggle Theme</button>
  </mat-menu>
  
</div>
```

> This menu is only opened when the button is clicked.

### Step #11.2: Define a dark-theme value

Add a `isDarkTheme` default value to our component

###### File: `src/app/app.component.ts`

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  isDarkTheme = false;
  users = USERS_DATA;
  selectedUser;
}
```

### Step #11.3: Add MatMenuModule

We also need to add `MatMenuModule` to our `MaterialModule`.

##### File: `src/app/material.module.ts`

```ts
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
    MatMenuModule
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
    MatMenuModule
  ]
})
export class MaterialModule {}
```

---

[Go to Tutorial Step 10](STEP_10.md)
