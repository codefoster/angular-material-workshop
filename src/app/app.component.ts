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
