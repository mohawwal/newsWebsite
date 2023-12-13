import { Component, OnInit } from '@angular/core';
import { NewsLetterService } from '../services/news-letter.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  businessNews:any[] =[]
  constructor(private services: NewsLetterService){}

  ngOnInit(): void {
    this.services.businessNews()
    .subscribe(
      (Response)=> {
        this.businessNews= Response.articles
      }
    )
  }

}