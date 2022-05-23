//#region Imports

import { Injectable } from '@angular/core';
import { LoginInteractor } from '../../interactors/login/login.interactor';
import { CreateUserPayload } from '../../models/payloads/create-user.payload';
import { LoginPayload } from '../../models/payloads/login.payload';

//#endregion

/**
 * A classe que representa o serviço que lida com a autenticação do aplicativo
 */
@Injectable({
  providedIn: 'root',
})
export class LoginService {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private readonly interactor: LoginInteractor,
  ) { }

  //#endregion

  //#region Public Methods

  /**
   * Método que autentica um usuário pelo e-mail e senha
   *
   * @param payload As informações necessárias para a autenticação
   */
  public async performLogin(payload: LoginPayload): Promise<[boolean, string]> {
    const { error } = await this.interactor.performLogin(payload);

    if (error)
      return [false, 'Ocorreu um erro ao autenticar, por favor, tente novamente.'];

    return [true, 'Sucesso, bem-vindo de volta!'];
  }

  /**
   * Método que cria um usuário
   *
   * @param payload As informações necessárias para a criação de usuário
   */
  public async register(payload: CreateUserPayload): Promise<[boolean, string]> {
    const { error } = await this.interactor.register(payload);

    if (error)
      return [false, 'Ocorreu um erro ao criar, por favor, tente novamente.'];

    return [true, 'Sucesso, bem-vindo ao aplicativo!'];
  }

  //#endregion

}
