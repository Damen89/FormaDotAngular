import { Component, Input, OnInit } from '@angular/core';
import { Ricetta } from '../ricetta.model';
import { RicettaService } from '../ricetta.service';

@Component({
  selector: 'app-dettaglio-ricette',
  templateUrl: './dettaglio-ricette.component.html',
  styleUrls: ['./dettaglio-ricette.component.css']
})
export class DettaglioRicetteComponent implements OnInit {
  @Input() ricetta: Ricetta;

  constructor(private ricettaService: RicettaService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.ricettaService.addIngredientiToShoppingList(this.ricetta.ingredienti)
  }

}
