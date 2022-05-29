//#region Imports

import { Injectable } from '@angular/core';
import { FreelancerInteractor } from '../../interactors/freelancer/freelancer.interactor';
import { UpdateFreelancerPayload } from '../../models/payloads/update-freelancer.payload';
import { FreelancerProxy } from '../../models/proxies/freelancer.proxy';
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
   * Método que retorna as informações de freelancer do usuário logado
   */
  public async getMe(): Promise<[FreelancerProxy | null, string?]> {
    const { error, success } = await this.interactor.getMe();

    if (error)
      return [null, 'Ocorreu um erro ao buscar suas informações, por favor, tente novamente.'];

    return [success!];
  }

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

  /**
   * Método que atualiza um freelancer
   *
   * @param payload As informações necessárias para a atualização de um freelancer
   */
  public async updateFreelancer(payload: UpdateFreelancerPayload): Promise<[boolean, string]> {
    const { error } = await this.interactor.updateFreelancer(payload);

    if (error)
      return [false, 'Ocorreu um erro ao atualizar, por favor, tente novamente.'];

    return [true, 'Suas informações foram salvas!'];
  }

  //#endregion

}
