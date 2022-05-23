//#region Imports

import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { CreateCategoryPayload } from '../../models/payloads/create-category.payload';
import { CategoryProxy } from '../../models/proxies/category.proxy';
import { PaginatedCategoryProxy } from '../../models/proxies/paginated-category.proxy';
import { createCategoryMockup, getCategoriesMockup } from './category.mockup';

//#endregion

/**
 * A classe que representa o interactor que lida com as rotas e cache das categorias
 */
@Injectable({
  providedIn: 'root',
})
export class CategoryInteractor {

  //#region Public Methods

  /**
   * Método que retorna todos as categorias paginadas
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getCategories(currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedCategoryProxy>> {
    if (environment.mockupEnabled)
      return await getCategoriesMockup(currentPage, maxItens);

    throw new Error('Não foi implementado');
  }

  /**
   * Método que cria uma nova categoria
   *
   * @param payload As informações necessárias para a criação de uma nova categoria
   */
  public async createCategory(payload: CreateCategoryPayload): Promise<HttpAsyncResult<CategoryProxy>> {
    if (environment.mockupEnabled)
      return await createCategoryMockup(payload);

    throw new Error('Não foi implementado');
  }

  //#endregion

}
