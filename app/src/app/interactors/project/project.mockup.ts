//#region Imports

import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { StorageAsyncResult } from '../../models/interfaces/storage-async-result';
import { CreateProjectPayload } from '../../models/payloads/create-project.payload';
import { PaginatedProjectProxy } from '../../models/proxies/paginated-project.proxy';
import { getFakeProjectProxy, ProjectProxy } from '../../models/proxies/project.proxy';

//#endregion

/**
 * Método que retorna os meus projetos criados
 */
export async function getMyProjectsMockup(): Promise<StorageAsyncResult<ProjectProxy[]>> {
  return Promise.resolve({
    error: undefined,
    success: [
      getFakeProjectProxy(),
      getFakeProjectProxy(),
      getFakeProjectProxy(),
      getFakeProjectProxy(),
    ],
  });
}

/**
 * Método que retorna todos os projetos paginados mockados
 *
 * @param currentPage A página atual
 * @param maxItens A quantidade máxima de itens que deve vir por paginação
 */
export async function getAllProjectsMockup(currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedProjectProxy>> {
  const paginated: PaginatedProjectProxy = {
    pageCount: 5,
    currentPage,
    items: [],
    maxItens,
  };

  for (let i = 0; i < maxItens; i++)
    paginated.items.push(getFakeProjectProxy());

  return {
    success: paginated,
  };
}

/**
 * Método que retorna os projetos de uma categoria paginados mockados
 *
 * @param categoryId A identificação da categoria
 * @param currentPage A página atual
 * @param maxItens A quantidade máxima de itens que deve vir por paginação
 */
export async function getProjectsByCategoryIdMockup(categoryId: number, currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedProjectProxy>> {
  const paginated: PaginatedProjectProxy = {
    pageCount: 5,
    currentPage,
    items: [],
    maxItens,
  };

  for (let i = 0; i < maxItens; i++)
    paginated.items.push(getFakeProjectProxy());

  return {
    success: paginated,
  };
}

/**
 * Método que retorna as informações de um projeto criado com sucesso
 *
 * @param payload As informações para a criação do projeto
 */
export async function createProjectMockup(payload: CreateProjectPayload): Promise<HttpAsyncResult<ProjectProxy>> {
  await new Promise(resolve => setTimeout(resolve, 2_000));

  return {
    success: getFakeProjectProxy(),
  };
}


/**
 * Método que retorna as informações de um projeto
 *
 * @param projectId A identificação do projeto
 */
export async function getProjectByIdMockup(projectId: number): Promise<HttpAsyncResult<ProjectProxy>> {
  await new Promise(resolve => setTimeout(resolve, 2_000));

  return {
    success: getFakeProjectProxy(),
  };
}
