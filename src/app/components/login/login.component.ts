import { RegisterComponent } from './../register/register.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  Form: FormGroup;
  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<any>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    if(this.Form.valid)
    console.log(this.Form.value)
  }
  onClose(){
    this.dialogRef.close();
  }

  Signup(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "100%";
    this.dialog.open(RegisterComponent, dialogConfig);
    this.dialogRef.close();
  }

}
