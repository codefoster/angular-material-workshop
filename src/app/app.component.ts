import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {MatIconRegistry} from '@angular/material';

import {USERS_DATA} from './users/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  users = USERS_DATA;
  selectedUser;

  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    registry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  ngOnInit() {
    this.selectedUser = this.users[0];
  }
}
