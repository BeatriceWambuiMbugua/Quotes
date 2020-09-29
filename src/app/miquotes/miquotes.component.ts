import { Component, OnInit } from '@angular/core';
import {Miquotes} from '../miquotes';



@Component({
  selector: 'app-miquotes',
  templateUrl: './miquotes.component.html',
  styleUrls: ['./miquotes.component.css']
})

export class MiquotesComponent implements OnInit {

  title = 'Welcome to MiQuotes'

  quotes:Miquotes[] = [
    new Miquotes(1, 'Things change. And friends leave. Life does not stop for anybody', 'Leo Tolstoy', new Date (2020, 9, 29)),
    new Miquotes(2, 'Everyone thinks of changing the world, but no one thinks of changing himself.',  'Nelson Mandela', new Date (2020, 9, 28)),
    new Miquotes(3, 'Education is the most powerful weapon which you can use to change the world.', 'Albert Einstein', new Date (2020, 9, 29))

  ];

  seeMore(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  quoteRead(isRead, index){
    if (isRead){
      let toRead= confirm('Are you certain you are done reading this MiQuote?')
      if(toRead){
        this.quotes.splice(index,1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
