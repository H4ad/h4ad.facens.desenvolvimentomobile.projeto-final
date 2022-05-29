//#region Imports

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProjectProxy } from '../../../models/proxies/project.proxy';
import { ProjectService } from '../../../services/project/project.service';

//#endregion

/**
 * A classe que representa a página que exibe as informações de um projeto
 */
@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly project: ProjectService,
    protected readonly toast: ToastController,
  ) {
    this.backUrl = decodeURIComponent(this.route.snapshot.queryParamMap.get('backUrl') || '/main/projects');
  }

  //#endregion

  //#region Public Properties

  /**
   * As informações do projeto
   */
  public content?: ProjectProxy;

  /**
   * Diz se está carregando as informações de um projeto
   */
  public isLoadingProject: boolean = false;

  /**
   * O URL da página anterior
   */
  public readonly backUrl: string;

  //#endregion

  //#region LifeCycle Events

  /**
   * Método executado ao iniciar o componente
   */
  public async ngOnInit(): Promise<void> {
    this.isLoadingProject = true;

    const projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    const [project, errorMessage] = await this.project.getProjectById(projectId);

    this.isLoadingProject = false;

    if (!project || errorMessage)
      return void this.toast.create({
        message: errorMessage,
      }).then(toast => toast.present());

    this.content = project;
  }

  //#endregion

}
