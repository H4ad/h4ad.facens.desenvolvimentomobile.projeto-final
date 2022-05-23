//#region Imports

import { Component, Input } from '@angular/core';

import { CategoryProxy } from '../../models/proxies/category.proxy';

//#endregion

/**
 * A classe que representa o componente que exibe as informações de uma categoria
 */
@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {

  //#region Inputs

  /**
   * As informações de conteúdo desse componente
   */
  @Input()
  public content!: CategoryProxy;

  //#endregion

}

