//#region Imports

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { TrackablePage } from '../../../common/trackable.page';
import { FreelancerProxy } from '../../../models/proxies/freelancer.proxy';
import { PaginatedFreelancerProxy } from '../../../models/proxies/paginated-freelancer.proxy';
import { FreelancerService } from '../../../services/freelancer/freelancer.service';

//#endregion

/**
 * A classe que representa a página que exibe todos os freelancers que existem na aplicação
 */
@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.page.html',
  styleUrls: ['./freelancers.page.scss'],
})
export class FreelancersPage extends TrackablePage implements OnInit, OnDestroy {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly freelancer: FreelancerService,
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
   * A lista com todos os freelancers
   */
  public listAllFreelancers: FreelancerProxy[] = [];

  /**
   * As informações de paginação
   */
  public paginatedFreelancer?: PaginatedFreelancerProxy;

  /**
   * Diz se está carregando mais freelancers
   */
  public isLoadingFreelancers: boolean = false;

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
   * Método que carrega a próxima página de freelancers
   */
  public async nextPage(): Promise<void> {
    if (this.paginatedFreelancer && this.paginatedFreelancer.currentPage >= this.paginatedFreelancer.pageCount)
      return;

    if (this.isLoadingFreelancers)
      return;

    this.isLoadingFreelancers = true;

    const currentPage = this.paginatedFreelancer?.currentPage || 0;

    this.paginatedFreelancer = await this.freelancer.getAllFreelancers(currentPage + 1, 4);
    this.listAllFreelancers = [...this.listAllFreelancers, ...this.paginatedFreelancer.items];

    this.isLoadingFreelancers = false;
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
