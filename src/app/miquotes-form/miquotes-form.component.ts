import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Miquotes } from '../miquotes';

@Component({
  selector: 'app-miquotes-form',
  templateUrl: './miquotes-form.component.html',
  styleUrls: ['./miquotes-form.component.css']
})
export class MiquotesFormComponent implements OnInit {

  newMiquotes = new Miquotes (0,"","", new Date ());
  @Output() add = new EventEmitter<Miquotes>();

  addQuote (){
    this.add.emit(this.newMiquotes);
    this.newMiquotes=new Miquotes (0,"","", new Date ());
  }

  constructor() {}

  ngOnInit() {
  }

}
