//#region Imports

import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { UpdateFreelancerPayload } from '../../models/payloads/update-freelancer.payload';
import { FreelancerProxy } from '../../models/proxies/freelancer.proxy';
import { PaginatedFreelancerProxy } from '../../models/proxies/paginated-freelancer.proxy';
import { getAllFreelancersMockup, getMeMockup, updateFreelancerMockup } from './freelancer.mockup';

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
   * Método que retorna as informações de freelancer do usuário logado
   */
  public async getMe(): Promise<HttpAsyncResult<FreelancerProxy>> {
    if (environment.mockupEnabled)
      return await getMeMockup();

    throw new Error('Não foi implementado');
  }

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

  /**
   * Método que atualiza um freelancer
   *
   * @param payload As informações necessárias para a atualização de um freelancer
   */
  public async updateFreelancer(payload: UpdateFreelancerPayload): Promise<HttpAsyncResult<FreelancerProxy>> {
    if (environment.mockupEnabled)
      return await updateFreelancerMockup(payload);

    throw new Error('Não foi implementado');
  }

  //#endregion

}
