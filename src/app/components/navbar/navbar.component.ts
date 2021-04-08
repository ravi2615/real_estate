import { LoginComponent } from './../login/login.component';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  opened = false;
  public showSearchPane: boolean;
  Form = this.formBuilder.group({
    searchItem: ''
  });
  constructor(private formBuilder: FormBuilder,private dialog: MatDialog, private cdRef: ChangeDetectorRef) { 
    
  }

  ngOnInit(): void {
    this.showSearchPane = false;
  }

  ngAfterViewInit():void{
    this.cdRef.detectChanges();
  }

  openLogin(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "100%";
    this.dialog.open(LoginComponent, dialogConfig);
  }

  searchItems(styleDisplay:string):void{
    if(styleDisplay === 'none'){
      this.showSearchPane = !this.showSearchPane;
    }else if(this.Form.value !="") {
      this.doSearch();
    }
  }

  doSearch(){
    if(this.Form.value.searchItem !="")
    console.log("actual Search",this.Form.value.searchItem)
  }

}
