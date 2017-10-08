import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  templateUrl: './user.dialog.component.html'
})
export class AdminDialogComponent {
  avatars = new Array(16).fill(0).map((_, i) => `svg-${i + 1}`);
  selectedAvatar = this.avatars[0];

  constructor(public dialogRef: MatDialogRef<AdminDialogComponent>) {}
}
