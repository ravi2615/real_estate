import { LoginComponent } from './../login/login.component';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  Form: FormGroup;
  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<any>,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
      address: ['', [Validators.required, Validators.minLength(4)]],
      name: ['', [Validators.required, Validators.minLength(4)]],
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

  Login(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "100%";
    this.dialog.open(LoginComponent, dialogConfig);    
    this.dialogRef.close();
  }

}
