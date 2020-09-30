import { Component, OnInit } from '@angular/core';
import {Miquotes} from '../miquotes';



@Component({
  selector: 'app-miquotes',
  templateUrl: './miquotes.component.html',
  styleUrls: ['./miquotes.component.css']
})

export class MiquotesComponent implements OnInit {

  title = 'MiQuotes'

  quotes:Miquotes[] = [
    new Miquotes(1, 'Wambui', 'Change', 'Things change. And friends leave. Life does not stop for anybody', 'Leo Tolstoy', new Date (2020, 9, 29), 0, 0),
    new Miquotes(2, 'Beatrice', 'inner-change', 'Everyone thinks of changing the world, but no one thinks of changing himself.',  'Nelson Mandela', new Date (2020, 9, 28), 0,0),
    new Miquotes(3, 'Mbugua', 'Education', 'Education is the most powerful weapon which you can use to change the world.', 'Albert Einstein', new Date (2020, 9, 29), 0,0)

  ];

  get myQuotes(){
    return this.quotes.sort((a,b)=>{
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    })
  }
  

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

  addedNewMiquotes(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
