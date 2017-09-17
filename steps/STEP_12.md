## Adaptive Layouts 

Let's add adaptive features using `@angular/flex-layout` and CSS media queries.

### Step #12.1: Mobile Layout

On Mobile devices, the content area should flow vertically instead of horizontally.

##### File: `src/app/app.component.html`

```html
  <mat-sidenav-content class="content">
    <div class="content" fxLayout="row" fxLayout.lt-md="column" fxLayoutGap="16px">
        ...
    </div>

    ...
  </mat-sidenav-content>
```

> Using `fxLayout.lt-md="column"` tells the content area to layout its children in a vertical-flow when the screen is smaller than `960px`.

<br/>

----

###### When `fxLayout="row"`

![Horizontal Flow](https://cloud.githubusercontent.com/assets/6004537/24765552/7d32dbf2-1ab5-11e7-886d-3eee6fa84ba6.png)

###### When `fxLayout.lt-md="column"`

![Vertical Flow](https://user-images.githubusercontent.com/210413/31322100-e0438e9a-ac5e-11e7-95f3-0b3489c1a9c0.png)


See [Flex-Layout Wiki](https://github.com/angular/flex-layout/wiki/Responsive-API) for more details.

----

<br/>

### Step #12.2: Using ObservableMedia

To auto-close/open the SideNav, we will use ObservableMedia (from `@angular/flex-layout) to subscribe to mediaQuery 
breakpoint activations.

##### File:  `src/app/app.component.ts`

```js
import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {MatDialog, MatIconRegistry} from '@angular/material';

import {ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';

import {USERS_DATA} from './users/users.model';
import {AdminDialogComponent} from './dialog/admin.component';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  mediaWatcher : Subscription;
  isMobile = false;

  constructor(
      registry: MatIconRegistry,
      sanitizer: DomSanitizer,
      mediaService: ObservableMedia,
      private dialogs: MatDialog ) {

    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
    registry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);

    // Watch for mobile activations
    this.mediaWatcher = mediaService.asObservable().subscribe(change => {
      this.isMobile = change.matches && ((change.mqAlias == 'sm') || (change.mqAlias == 'xs'));
    });
  }

  ngOnDestroy() {
    this.mediaWatcher.unsubscribe();
  }
}
```

> !! Use `ngOnDestroy() lifecycle event to `unsubscribe()` or you will have a memory link.

Now let's make sure we bind the `opened` SideNav directive to the `isMobile` value.

##### File:  `src/app/app.component.html`

```html
<mat-sidenav #side mode="side" [opened]="!isMobile">

 ...

</mat-sidenav>
```

> Question: Why did we use the `fxLayout.lt-md` instead of `fxLayout.sm` API ?

----

## DONE

You have successfully finished the **Angular Material Master Class**!
