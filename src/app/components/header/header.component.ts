import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  List:{title: string}[] = [
    {title:"Buy"},
    {title:"Rent"},
    {title:"Plot"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
