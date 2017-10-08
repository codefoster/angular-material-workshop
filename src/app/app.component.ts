import {Component, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import {MatDialog, MatIconRegistry} from '@angular/material';

import {USERS_DATA} from './users/users.model';
import {AdminDialogComponent} from './admin/user.dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  mediaWatcher : Subscription;
  isMobile = false;
  isDarkTheme = false;
  users = USERS_DATA;
  selectedUser;

  constructor(
      registry: MatIconRegistry,
      sanitizer: DomSanitizer,
      mediaService: ObservableMedia,
      private dialogs:MatDialog) {

    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
    registry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);

    // Watch for mobile activations
    this.mediaWatcher = mediaService.asObservable().subscribe(change => {
      this.isMobile =  change.matches && ((change.mqAlias == 'sm') || (change.mqAlias == 'xs'));
    });
  }

  ngOnInit() {
    this.selectedUser = this.users[0];
  }

  ngOnDestroy() {
    this.mediaWatcher.unsubscribe();
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
