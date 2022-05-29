//#region Imports

import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { UpdateFreelancerPayload } from '../../models/payloads/update-freelancer.payload';
import { FreelancerProxy, getFakeFreelanceProxy } from '../../models/proxies/freelancer.proxy';
import { PaginatedFreelancerProxy } from '../../models/proxies/paginated-freelancer.proxy';

//#endregion

/**
 * Método que retorna as informações de freelancer do usuário logado
 */
export async function getMeMockup(): Promise<HttpAsyncResult<FreelancerProxy>> {
  return {
    success: getFakeFreelanceProxy(),
  };
}

/**
 * Método que retorna todos os freelancers paginados mockados
 *
 * @param currentPage A página atual
 * @param maxItens A quantidade máxima de itens que deve vir por paginação
 */
export async function getAllFreelancersMockup(currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedFreelancerProxy>> {
  const paginated: PaginatedFreelancerProxy = {
    pageCount: 5,
    currentPage,
    items: [],
    maxItens,
  };

  for (let i = 0; i < maxItens; i++)
    paginated.items.push(getFakeFreelanceProxy());

  return {
    success: paginated,
  };
}

/**
 * Método que atualiza um freelancer
 *
 * @param payload As informações necessárias para a atualização de um freelancer
 */
export async function updateFreelancerMockup(payload: UpdateFreelancerPayload): Promise<HttpAsyncResult<FreelancerProxy>> {
  return {
    success: getFakeFreelanceProxy(),
  };
}

