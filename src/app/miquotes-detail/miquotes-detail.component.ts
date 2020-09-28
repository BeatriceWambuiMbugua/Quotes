import { Component, OnInit, Input } from '@angular/core';
import { Miquotes } from '../miquotes';

@Component({
  selector: 'app-miquotes-detail',
  templateUrl: './miquotes-detail.component.html',
  styleUrls: ['./miquotes-detail.component.css']
})
export class MiquotesDetailComponent implements OnInit {

  @Input()quote: Miquotes;
  constructor() { }

  ngOnInit(): void {
  }

}
