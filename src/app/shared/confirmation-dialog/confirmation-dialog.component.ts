import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogModel) { 

    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  
  onConfirm(): void {

    this.dialogRef.close(true);
  }

  onDismiss(): void {

    this.dialogRef.close(false);
  }

}


export class ConfirmationDialogModel {

  constructor(public title: string, public message: string) {
  }
}
