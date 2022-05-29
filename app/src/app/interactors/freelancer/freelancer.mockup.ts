//#region Imports

import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { getFakeFreelanceProxy } from '../../models/proxies/freelancer.proxy';
import { PaginatedFreelancerProxy } from '../../models/proxies/paginated-freelancer.proxy';

//#endregion

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
