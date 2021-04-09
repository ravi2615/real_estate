import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
   
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
  ];
  
  constructor() {
    
}

  ngOnInit(): void {
  }

  


}
