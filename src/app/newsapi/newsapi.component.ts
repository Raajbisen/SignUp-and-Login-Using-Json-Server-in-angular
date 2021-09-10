import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service'; 

@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.css']
})
export class NewsapiComponent implements OnInit {

  constructor( private service: NewsapiservicesService) { }
  topHeadingDisplay:any=[];

  ngOnInit(): void {

    this.service.topHeading().subscribe((result)=>{

      console.log(result);
      this.topHeadingDisplay=result.articles;
    })
  }

}
