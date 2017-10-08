import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {MatDialog, MatIconRegistry} from '@angular/material';

import {USERS_DATA} from './users/users.model';
import {AdminDialogComponent} from './admin/user.dialog.component';

import 'rxjs/add/operator/filter';

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

  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer,private dialogs:MatDialog) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    registry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  ngOnInit() {
    this.selectedUser = this.users[0];
  }

  openAdminDialog() {
    this.dialogs
        .open(AdminDialogComponent)
        .afterClosed()
        .filter(result => !!result)
        .subscribe(user => {
          // Add new user
          this.users.push(user);
          this.selectedUser = user;
        });
  }


}
