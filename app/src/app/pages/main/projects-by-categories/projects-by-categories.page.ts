//#region Imports

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { TrackablePage } from '../../../common/trackable.page';
import { PaginatedProjectProxy } from '../../../models/proxies/paginated-project.proxy';
import { ProjectProxy } from '../../../models/proxies/project.proxy';
import { ProjectService } from '../../../services/comment/project.service';

//#endregion

/**
 * A classe que representa a página que exibe todos os projetos de uma categoria que existem na aplicação
 */
@Component({
  selector: 'app-projects-by-categories',
  templateUrl: './projects-by-categories.page.html',
  styleUrls: ['./projects-by-categories.page.scss'],
})
export class ProjectsByCategoriesPage extends TrackablePage implements OnInit, OnDestroy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    protected readonly comment: ProjectService,
    protected readonly route: ActivatedRoute,
  ) {
    super();

    this.currentScrollSubscription = this.currentScrollFrameSubject.pipe(
      throttleTime(16),
      map(currentDiv => {
        const threshold = 100;
        const position = currentDiv.scrollTop + currentDiv.offsetHeight;
        const height = currentDiv.scrollHeight;

        return position > height - threshold;
      }),
    ).subscribe(isNearBottom => isNearBottom && this.nextPage());
  }

  //#endregion

  //#region Private Subscriptions

  /**
   * A inscrição para escutar os eventos lançados do container atual
   */
  private readonly currentScrollSubscription: Subscription;

  //#endregion

  //#region Private Events

  /**
   * O evento que lança o container dos itens atual
   */
  private readonly currentScrollFrameSubject: Subject<HTMLDivElement> = new Subject<HTMLDivElement>();

  //#endregion

  //#region Public Properties

  /**
   * A lista com os projetos de uma categoria
   */
  public listProjects: ProjectProxy[] = [];

  /**
   * As informações de paginação
   */
  public paginatedProject?: PaginatedProjectProxy;

  /**
   * Diz se está carregando mais projetos
   */
  public isLoadingProjects: boolean = false;

  //#endregion

  //#region LifeCycle Events

  /**
   * Método executado ao iniciar o componente
   */
  public async ngOnInit(): Promise<void> {
    await this.nextPage();
  }

  /**
   * Método executado ao destruir o componente
   */
  public ngOnDestroy(): void {
    this.currentScrollSubscription.unsubscribe();
  }

  //#endregion

  //#region Public Methods

  /**
   * Método que carrega a próxima página de projetos
   */
  public async nextPage(): Promise<void> {
    if (this.paginatedProject && this.paginatedProject.currentPage >= this.paginatedProject.pageCount)
      return;

    if (this.isLoadingProjects)
      return;

    this.isLoadingProjects = true;

    const currentPage = this.paginatedProject?.currentPage || 0;
    const categoryId = Number(this.route.snapshot.paramMap.get('categoryId'));

    this.paginatedProject = await this.comment.getProjectsByCategoryId(categoryId, currentPage + 1, 4);
    this.listProjects = [...this.listProjects, ...this.paginatedProject.items];

    this.isLoadingProjects = false;
  }

  /**
   * Método que é executado toda vez que ocorre um evento de scroll no container dos itens
   *
   * @param event As informações do evento de Scroll
   */
  public onScroll(event: any): void {
    this.currentScrollFrameSubject.next(event.currentTarget);
  }

  //#endregion

}
