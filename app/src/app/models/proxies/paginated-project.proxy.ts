//#region Imports

import { ProjectProxy } from './project.proxy';

//#endregion

/**
 * A interface que representa os resultados paginados dos projetos
 */
export interface PaginatedProjectProxy {

  /**
   * O indice atual da paginação
   */
  currentPage: number;

  /**
   * O total de paǵinas dessa paginação
   */
  pageCount: number;

  /**
   * O total de itens por página
   */
  maxItens: number;

  /**
   * Os itens dessa páginação
   */
  items: ProjectProxy[];
}
