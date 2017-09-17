## ListItem Selection

Let's add *Selected Us*er functionality and show the selected user details in our details container

### Step #6.1: Support User List Item Selection

First let's select the first user from the users list for our initial view state.

##### File:  `src/app/app.component.ts`

```ts
import {Component, ViewEncapsulation} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  users = USERS_DATA;
  selectedUser;
  
  ngOnInit() {
    this.selectedUser = this.users[0];
  }
}

```

### Step #6.2: Show Selected User Information

Then we will modify the template for our main `app.component`. 

> Do you know why we use the 'safe navigation' operator? 

##### File:  `src/app/app.component.html`

```html
  <mat-sidenav-container fxFlex>
    <mat-sidenav #side mode="side" [opened]="true">
       <mat-tab-group>
        <mat-tab label="Users">
          <mat-nav-list>
            <mat-list-item *ngFor="let user of users" (click)="selectedUser = user">
              <mat-icon svgIcon="avatars:{{user.avatar}}" class="avatar"></mat-icon>
              <span>{{user.name}}</span>
            </mat-list-item>
          </mat-nav-list>
        </mat-tab>
      </mat-tab-group>
    </mat-sidenav>

    <mat-sidenav-content 
        class="content">
      <div class="content">
         <mat-icon svgIcon="avatars:{{selectedUser?.avatar}}" class="avatar"></mat-icon>
         <h2>{{selectedUser?.name}}</h2>
         <p>{{selectedUser?.details}}</p>
      </div>
    </mat-sidenav-content>
  </mat-sidenav-container>
```

### Step #6.3: Adjust Stylings

Finally let's add some padding to our content area

##### File:  `src/app/app.component.css`

```css
.content {
  padding: 12px;
}
```

---

[Go to Tutorial Step 7](STEP_7.md)
