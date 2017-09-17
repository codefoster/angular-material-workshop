## UI Layout

Here we will use our wireframe planning and layout to identify the components and attributes needed.

![Wireframe](https://cloud.githubusercontent.com/assets/6004537/20150970/05ae3f26-a6c1-11e6-981f-53032ae41e57.png)

* Add the `<md-toolbar>`, `<mat-sidenav-container>`, `<mat-sidenav-content>` containers

  > **Note:** The `<mat-sidenav>` is the container for the Users **master list** view, and for now a simple
  `<div>` is the container for the User **detail** view.
  
* Add the **fxLayout** and **fxFlex** attributes to configure the container layouts and sizing aspects
* Use `mode="side"` and `opened` to lock the sidenav open on the left


### Step #3.1:

Let's create the following template:

##### File: `src/app/app.component.html`

```html
<div fxLayout="column" fxFlex>

  <mat-toolbar color="primary">
    <span>Angular Material</span>
  </mat-toolbar>

  <mat-sidenav-container fxFlex>
    <mat-sidenav #side mode="side" [opened]="true">
      Sidenav
    </mat-sidenav>

    <mat-sidenav-content 
        class="content" 
        (click)="side.opened ? side.close() : side.open() ">
      Page Content
    </mat-sidenav-content>
  </mat-sidenav-container>

</div>
```

Then make sure you use this template in your `app.component.ts` component:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
```

### Step #3.2:

We also need to add `MatSidenavModule` and `MatToolbarModule` to our `MaterialModule`.

##### File: `src/app/material.module.ts`

```js
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}

```

Giving the host element a flex property of `1` to fill height and sidenav a default width of `320px`

###### File:  `src/app/app.component.css`

```css
:host {
  display: flex;
  flex-direction: column;
  flex: auto;
}

mat-sidenav-container {
  min-height: 100px;
}
mat-sidenav {
  width: 320px;
  padding: 12px;
}
```

----

[Go to Tutorial Step 4](./STEP_4.md)
