import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private service: NewsapiservicesService) { }

  topEnterDisplay:any=[];

  ngOnInit(): void {


    this.service.enterNews().subscribe((result)=>{

      console.log(result);
      this.topEnterDisplay=result.articles;
    })
  
  }

}
