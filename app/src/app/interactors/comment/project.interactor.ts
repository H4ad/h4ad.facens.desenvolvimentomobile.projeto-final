//#region Imports

import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { StorageAsyncResult } from '../../models/interfaces/storage-async-result';
import { CreateProjectPayload } from '../../models/payloads/create-project.payload';
import { PaginatedProjectProxy } from '../../models/proxies/paginated-project.proxy';
import { ProjectProxy } from '../../models/proxies/project.proxy';
import { createProjectMockup, getAllProjectsMockup, getMyProjectsMockup, getProjectsByCategoryIdMockup } from './project.mockup';

//#endregion

/**
 * A classe que representa o interactor que lida com as rotas e cache dos projetos
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectInteractor {

  //#region Storage Methods

  /**
   * Método que retorna os meus projetos criados
   */
  public async getMyProjects(): Promise<StorageAsyncResult<ProjectProxy[]>> {
    if (environment.mockupEnabled)
      return await getMyProjectsMockup();

    throw new Error('Não foi implementado');
  }

  /**
   * Método que retorna todos os projetos paginados
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getAllProjects(currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedProjectProxy>> {
    if (environment.mockupEnabled)
      return await getAllProjectsMockup(currentPage, maxItens);

    throw new Error('Não foi implementado');
  }

  /**
   * Método que retorna os projetos de uma categoria em especifico
   *
   * @param categoryId A identificação da categoria
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getProjectsByCategoryId(categoryId: number, currentPage: number, maxItens: number): Promise<HttpAsyncResult<PaginatedProjectProxy>> {
    if (environment.mockupEnabled)
      return await getProjectsByCategoryIdMockup(categoryId, currentPage, maxItens);

    throw new Error('Não foi implementado');
  }

  /**
   * Método que cria um novo projeto
   *
   * @param payload As informações para a criação do projeto
   */
  public async createProject(payload: CreateProjectPayload): Promise<HttpAsyncResult<ProjectProxy>> {
    if (environment.mockupEnabled)
      return await createProjectMockup(payload);

    throw new Error('Não foi implementado');
  }

  //#endregion

}
