import { ViewPropertyComponent } from './../view-property/view-property.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
   
  dataAll: {_id:string, localities: string, price:number, subtitle: string, url: string}[] = [
    {_id:'1',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'2',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'3',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'4',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'5',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'6',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'7',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'8',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'9',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {_id:'10',localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
  ];
  
  constructor(private router:Router) {
    
}

  ngOnInit(): void {
  }

  
viewProperty(id){
  console.log(id);
  this.router.navigate(['viewproperty'],id)
  }


}
