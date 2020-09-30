import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Miquotes } from '../miquotes';



@Component({
  selector: 'app-miquotes-detail',
  templateUrl: './miquotes-detail.component.html',
  styleUrls: ['./miquotes-detail.component.css']
})
export class MiquotesDetailComponent implements OnInit {

  @Input() quote: Miquotes;

  @Output()isRead = new EventEmitter<boolean>();
  
  quoteRead(read:boolean){
    this.isRead.emit(read);
  }
  constructor() { }

  ngOnInit(){
  }

}
