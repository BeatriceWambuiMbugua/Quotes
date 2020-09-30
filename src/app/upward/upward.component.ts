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
    this.numberOfLikes+=1;
  }

  downvoteButtonClick(){
    this.numberOfLikes-=1;
  }
  constructor() { }

  ngOnInit() {
  }

}
