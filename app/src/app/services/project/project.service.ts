//#region Imports

import { Injectable } from '@angular/core';
import { ProjectInteractor } from '../../interactors/project/project.interactor';
import { CreateProjectPayload } from '../../models/payloads/create-project.payload';
import { PaginatedProjectProxy } from '../../models/proxies/paginated-project.proxy';
import { ProjectProxy } from '../../models/proxies/project.proxy';

//#endregion

/**
 * A classe que representa o serviço que lida com os projetos da aplicação
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly interactor: ProjectInteractor,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que retorna os meus projetos criados
   */
  public async getMyProjects(): Promise<ProjectProxy[]> {
    const { error, success } = await this.interactor.getMyProjects();

    if (error)
      return [];

    if (!Array.isArray(success))
      return [];

    return success;
  }

  /**
   * Método que retorna todos os projetos criados na aplicação
   *
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getAllProjects(currentPage: number, maxItens: number): Promise<PaginatedProjectProxy> {
    const { error, success } = await this.interactor.getAllProjects(currentPage, maxItens);

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
   * Método que retorna os projetos de uma categoria em especifico
   *
   * @param categoryId A identificação da categoria
   * @param currentPage A página atual
   * @param maxItens A quantidade máxima de itens que deve vir por paginação
   */
  public async getProjectsByCategoryId(categoryId: number, currentPage: number, maxItens: number): Promise<PaginatedProjectProxy> {
    const { error, success } = await this.interactor.getProjectsByCategoryId(categoryId, currentPage, maxItens);

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
   * Método que cria um novo projeto
   *
   * @param payload As informações para a criação do projeto
   */
  public async createComment(payload: CreateProjectPayload): Promise<[boolean, string]> {
    const { error } = await this.interactor.createProject(payload);

    if (error)
      return [false, 'Ocorreu um erro ao criar, por favor, tente novamente.'];

    return [true, 'Projeto criado com sucesso!'];
  }

  /**
   * Método que retorna as informações de um projeto
   *
   * @param projectId A identificação do projeto
   */
  public async getProjectById(projectId: number): Promise<[ProjectProxy | null, string?]> {
    const { success, error } = await this.interactor.getProjectById(projectId);

    if (error)
      return [null, 'Ocorreu um erro ao buscar as informações do projeto, por favor, tente novamente.'];

    return [success!];
  }

  //#endregion

}
