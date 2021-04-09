import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
 
  page=20;
  start=0;
  dataAll: {localities: string, price:number, originalPrice:number, subtitle: string, url: string}[] = [
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
  ];
  members = new Array();
 isLoading= false;
  
  constructor(private spinner: NgxSpinnerService) {
    
}

  ngOnInit(): void {
    // this.isLoading=true;
    this.getData();
  }

  getData(){
    this.isLoading=true;
      for(var i=this.start;i<this.page&&i<this.dataAll.length;i++){
        this.members[i]=this.dataAll[i];
      }
      this.isLoading=false;
  }

  onScroll(){
    console.log('scrolled Down!!')
    this.start=this.page
    this.page+=20
    // this.isLoading=true;
    this.getData()
}
onScrollUp(){
  console.log('scrolled Up!!')
  this.members.splice(0,this.members.length-10);
  this.page=20;
  this.start=0;
  // this.isLoading=true;
  this.getData()
}


}

