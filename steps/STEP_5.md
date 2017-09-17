## User MatIconRegistry Service


Use MatIcon components + a customm SVG Sheet [`avatars.svg`] to show each user's Avatar.
 
### Step #6.1: Using `<mat-icon>`

Update the side bar to show the user's name AND their avatar.

> Note: we use the `avatars:` prefix to indicate the `avatars` namespace.

###### File: `src/app/app.component.html`

```html
...
  <mat-nav-list>
    <mat-list-item *ngFor="let user of users">
      <mat-icon svgIcon="avatars:{{user.avatar}}" class="avatar"></mat-icon>
      <span>{{user.name}}</span>
    </mat-list-item>
  </mat-nav-list>
...
```

### Step #6.2: Using MatIconRegistry

Here you will use the `MatIconRegistry` service provided by Material which allows us to add a namespace for a group of svg's.

By using the `addSvgIconSetInNamespace` function we provide a namespace that can be used with `mat-icon` 
and the location of that svg group.

> We can use the pattern `<mat-icon svgIcon="[namespace]:[id]">` and it would look the namespace and the id in it.

##### File:  `src/app/app.component.ts`

```ts
import {Component} from '@angular/core';
import {USERS_DATA} from './users/users.model';

import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = USERS_DATA;

  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    registry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }
}

```

### Step #6.3: Configure MatIconModule

We also need to add `MatIconModule` to our custom `MaterialModule`.

##### File: `src/app/material.module.ts`
```ts
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule {}

```

### Step #6.4: Configure Http for External Data

To load the avatars we need to add `HttpModule` to our `AppModule`

##### File: `src/app/app.module.ts`

```
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

### Step #6.5: Avatar CSS

##### File:  `src/app/app.component.css`

```css

.avatar {
  overflow: hidden;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 12px;
}

/deep/ .mat-list-item-content {
  height: auto !important;
}
```

### Tips

#### 1. Deep CSS Operators

Use the /deep/ shadow-piercing descendant combinator to force a style down through the child 
component tree into all the child component views. The /deep/ combinator works to any depth of 
nested components, and it applies to both the view children and content children of the component.

[more...](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep)

#### 2.  List Items

Angular Material list items have a fixed height and won't expand to the height of the content.

Overwriting and forcing the height to `auto` allows the avatar to take full height.

----

[Go to Tutorial Step 6](STEP_6.md)
