import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Ricetta } from '../../ricetta.model';

@Component({
  selector: 'app-item-ricetta',
  templateUrl: './item-ricetta.component.html',
  styleUrls: ['./item-ricetta.component.css']
})
export class ItemRicettaComponent implements OnInit {
  @Input() ricetta: Ricetta;
  //Questi due non si conoscono
  @Output() ricettaSelezionata = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

  }

  onSelected(){
    this.ricettaSelezionata.emit();
  }
}
