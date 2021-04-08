import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
   
  page=20;
  start=0;
  dataAll: {title: string, subtitle: string, content: string, url: string}[] = [
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},{title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'http://www.sweethome3d.com/images/gallery2015/MaxHan.jpg'},
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
    this.page+=10
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
