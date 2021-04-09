import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
   
  dataAll: {localities: string, price:number, subtitle: string, url: string}[] = [
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, subtitle: 'Semi Furnished 2 BHK', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
  ];
  
  constructor() {
    
}

  ngOnInit(): void {
  }

  


}
