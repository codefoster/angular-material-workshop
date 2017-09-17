## Using the Tabs Component

Here you will have a tab group that will contain the users list within a nav-list component

### Step #4.1: Use *ngFor + MatTab

Let's update the SideNav container template to show two (2) tabs:

*  List of Users
*  Settings 

##### File:  `src/app/app.component.html`

```html
...
  <mat-sidenav #side mode="side" [opened]="true">  
    <mat-tab-group>
      <mat-tab label="Users">
        <mat-nav-list>
          <mat-list-item *ngFor="let user of users">
            <span>{{user.name}}</span>
          </mat-list-item>
        </mat-nav-list>
      </mat-tab>
      <mat-tab label="Settings">
        <span>Settings</span>
      </mat-tab>
    </mat-tab-group>  
  </mat-sidenav>
...
```
<img src="https://cloud.githubusercontent.com/assets/6004537/24765471/24c1f7c8-1ab5-11e7-8a7d-555d78dfda59.png" width="50%">

### Step #4.2: Add MatTabsModule

We also need to add `MatTabsModule` and `MatListModule` to our custom `MaterialModule`.

##### File: `src/app/material.module.ts`

```ts
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule
  ]
})
export class MaterialModule {}

```

### Step #4.2: Render the Users List

Adding [users](https://github.com/ThomasBurleson/angular-material-workshop/blob/classroom/src/app/users/users.model.ts) to the sidebar list:

###### File:  `src/app/app.component.ts`

```ts
import {Component} from '@angular/core';
import {USERS_DATA} from './users/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = USERS_DATA;
}
```

<br/>

----

## Bonus

### Step #4.3: Add 'Settings' Tab

If we add another tab, we will see that the Tabs component shows paginators and the Settings
tab is clipped. 

![Tabs Clipping](https://user-images.githubusercontent.com/210413/31317546-fa3a40d0-ac10-11e7-8ffb-cf2a56038030.png)

> This clipping results from the paginators shown due to the default tab button width.

Let's override the `mat-tab-label` width:

###### File:  `src/app/app.component.css`

```css
/deep/ .mat-tab-label {
  min-width:100px !important;
} 
```

----

[Go to Tutorial Step 5](./STEP_5.md)
