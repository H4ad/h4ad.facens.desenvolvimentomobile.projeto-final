//#region Imports

import { Component, Input } from '@angular/core';
import { ProjectProxy } from '../../models/proxies/project.proxy';

//#endregion

/**
 * A classe que o componente que exibe as informações de um projeto
 */
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent {

  //#region Inputs

  /**
   * O conteúdo desse componente
   */
  @Input()
  public content!: ProjectProxy;

  //#endregion

}
