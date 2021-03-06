import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingrediente } from 'src/app/shared/ingrediente.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shopListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredienti(nomeIng: HTMLInputElement, quant: HTMLInputElement){

    let newIng = new Ingrediente(nomeIng.value, +quant.value);
    this.shopListService.addIngredienteSing(newIng)

  }
}
