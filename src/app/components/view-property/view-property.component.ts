import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  dataAll: {localities: string, price:number, originalPrice:number, subtitle: string, url: string}[] = [
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {localities: 'localities', price: 2000, originalPrice: 2500, subtitle: 'Semi Furnished 2 BHK for rent in Independent House, sector 2, hsr layout, benguluru, karnataka, India', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
  ];

  constructor(private route: ActivatedRoute) { }
  id: string;
  private sub: any;
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
console.log(params)
      // In a real app: dispatch action to load the details here.
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
