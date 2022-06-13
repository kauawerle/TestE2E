import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AboutComponent } from 'src/pages/about/about.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  insertText(): void {
    const dialogRef = this.dialog.open(AboutComponent, {
      width: '550px',
      height: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
