import { Component, OnInit } from '@angular/core';
import { NewsLetterService } from '../services/news-letter.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  techNewsDisplay:any[] =[]

  constructor(private services: NewsLetterService){}

  ngOnInit(): void {
    this.services.techNews()
    .subscribe(
      (Response)=> {
        this.techNewsDisplay= Response.articles
        console.log(Response)
      }
    )
  }

}
