//#region Imports

import { Component, Input } from '@angular/core';
import { FreelancerProxy } from '../../models/proxies/freelancer.proxy';

//#endregion

/**
 * A classe que o componente que exibe as informações de um freelancer
 */
@Component({
  selector: 'app-freelancer-item',
  templateUrl: './freelancer-item.component.html',
  styleUrls: ['./freelancer-item.component.scss'],
})
export class FreelancerItemComponent {

  //#region Inputs

  /**
   * O conteúdo desse componente
   */
  @Input()
  public content!: FreelancerProxy;

  //#endregion

}
