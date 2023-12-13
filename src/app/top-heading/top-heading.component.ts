import { Component, OnInit } from '@angular/core';
import { NewsLetterService } from '../services/news-letter.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {
  topHeaderDisplayData:any[] = [];

  constructor(private services: NewsLetterService ){}

  ngOnInit(): void {
    this.services.topHeading()
    .subscribe(
      (Response)=> {
        this.topHeaderDisplayData = Response.articles;
        console.log(Response)
      }
    )
  }
}
