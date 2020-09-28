import { Component, OnInit } from '@angular/core';
import {Miquotes} from '../miquotes';



@Component({
  selector: 'app-miquotes',
  templateUrl: './miquotes.component.html',
  styleUrls: ['./miquotes.component.css']
})

export class MiquotesComponent implements OnInit {

  title = 'Welcome to the Room of Inspiration, Laughter, and Motivation'

  quotes:Miquotes[] = [
    new Miquotes(1, 'Things change. And friends leave. Life does not stop for anybody', 'Leo Tolstoy'),
    new Miquotes(2, 'Everyone thinks of changing the world, but no one thinks of changing himself.',  'Nelson Mandela'),
    new Miquotes(3, 'Education is the most powerful weapon which you can use to change the world.', 'Albert Einstein')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
