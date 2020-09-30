import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upward',
  templateUrl: './upward.component.html',
  styleUrls: ['./upward.component.css']
})
export class UpwardComponent implements OnInit {

  @Input () upward: string;
  numberOfLikes: number = 0;

  upvoteButtonClick(){
    this.numberOfLikes++;
  }

  downvoteButtonClick(){
    this.numberOfLikes--;
  }



  constructor() { }

  ngOnInit() {
  }

}
