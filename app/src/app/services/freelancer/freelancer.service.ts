//#region Imports

import { Injectable } from '@angular/core';
import { FreelancerInteractor } from '../../interactors/freelancer/freelancer.interactor';
import { PaginatedFreelancerProxy } from '../../models/proxies/paginated-freelancer.proxy';

//#endregion

/**
 * A classe que representa o serviço que lida com os freelancers da aplicação
 */
@Injectable({
  providedIn: 'root',
})
export class FreelancerService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly interactor: FreelancerInteractor,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna todos os freelancers criados na aplicação
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getAllFreelancers(currentPage: number, maxItens: number): Promise<PaginatedFreelancerProxy> {
    const { error, success } = await this.interactor.getAllFreelancers(currentPage, maxItens);

    if (error)
      return {
        pageCount: 1,
        currentPage: 1,
        items: [],
        maxItens,
      };

    return success!;
  }

  //#endregion

}
