#### Quick Jump ####
* [Initial Setup](./INITIAL_SETUP.md)
* [Step 1](./STEP_1.md)
* [Step 2](./STEP_2.md)
* [Step 3](./STEP_3.md)
* [Step 4](./STEP_4.md)
* [Step 5](./STEP_5.md)
* **Step 6 <-**
* [Step 7](./STEP_7.md)
* [Step 8](./STEP_8.md)
* [Step 9](./STEP_9.md)
* [Step 10](./STEP_10.md)

### Step #6 Task:

Here we will use `md-card` and `md-slide-toggle` components from Angular Material.

###### File:  `src/app/app.component.html`

```html
...

<div class="content" fxLayout="row" fxLayout.sm="column" fxLayoutGap="16px">

  <md-card fxFlex="80">
    <md-icon svgIcon="avatars:{{selectedUser.avatar}}" class="avatar"></md-icon>
    <h2>{{selectedUser.name}}</h2>
    <p>{{selectedUser.details}}</p>
  </md-card>

  <md-card fxFlex fxLayout="column" fxLayoutGap="14px">
    <md-slide-toggle [(ngModel)]="selectedUser.isAdmin">Is Admin?</md-slide-toggle>
    <md-slide-toggle [(ngModel)]="selectedUser.isCool">Is Cool?</md-slide-toggle>
  </md-card>

</div>

...
```

![image](https://cloud.githubusercontent.com/assets/6004537/24765552/7d32dbf2-1ab5-11e7-886d-3eee6fa84ba6.png)


We also need to add `MdSlideToggleModule` and `MdCardModule` to our `MaterialModule`.
###### File: `src/app/material.module.ts`
```ts
import {NgModule} from '@angular/core';
import {
  ...
  MdSlideToggleModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  exports: [
    ...
    MdSlideToggleModule,
    MdCardModule
  ]
})
export class MaterialModule {}

```

To use `NgModel` we need to add `FormsModule` to our `AppModule`
###### File: `src/app/app.module.ts`
...

import {FormsModule} from '@angular/forms';

...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

### Tips

#### 1. FlexLayout
Using `fxLayout.sm="column"` tells the content to be a column container when the screen is small (breakpoint `960px`)

Specifying a gap between the different children can be done by using 
[`fxLayoutGap`](https://github.com/angular/flex-layout/wiki/Declarative-API-Overview) with a value of `16px`.

#### 2. HammerJS

HammerJS handles all the user interactions and gestures for Material and simplifies the API.

Including the `hammerjs` package in our Angular application using Webpack.

###### File:  `src/app/app.module.ts`

```ts
...

import 'hammerjs';

...
```

----

[Go to Tutorial Step 7](./STEP_7.md)
