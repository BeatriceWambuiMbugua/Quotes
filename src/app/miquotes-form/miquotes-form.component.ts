import { Component, OnInit } from '@angular/core';
import { Miquotes } from '../miquotes';

@Component({
  selector: 'app-miquotes-form',
  templateUrl: './miquotes-form.component.html',
  styleUrls: ['./miquotes-form.component.css']
})
export class MiquotesFormComponent implements OnInit {

  newMiquotes = new Miquotes (0,"","", new Date ());

  constructor() { }

  ngOnInit() {
  }

}
