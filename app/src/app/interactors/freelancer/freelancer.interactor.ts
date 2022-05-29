//#region Imports

import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { PaginatedFreelancerProxy } from '../../models/proxies/paginated-freelancer.proxy';
import { getAllFreelancersMockup } from './freelancer.mockup';

//#endregion

/**
 * A classe que representa o interactor que lida com as rotas e cache dos freelancers
 */
@Injectable({
  providedIn: 'root',
})
export class FreelancerInteractor {

  //#region Storage Methods

  /**
   * Método que retorna todos os freelancers paginados
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getAllFreelancers(currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedFreelancerProxy>> {
    if (environment.mockupEnabled)
      return await getAllFreelancersMockup(currentPage, maxItens);

    throw new Error('Não foi implementado');
  }

  //#endregion

}
