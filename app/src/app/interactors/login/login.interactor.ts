//#region Imports

import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { CreateUserPayload } from '../../models/payloads/create-user.payload';
import { LoginPayload } from '../../models/payloads/login.payload';
import { TokenProxy } from '../../models/proxies/token.proxy';
import { performLoginMockup, registerMockup } from './login.mockup';

//#endregion

/**
 * A classe que representa o interactor que lida com as rotas e cache de autenticação
 */
@Injectable({
  providedIn: 'root',
})
export class LoginInteractor {

  //#region Public Methods

  /**
   * Método que autentica um usuário pelo e-mail e senha
   *
   * @param payload As informações necessárias para a autenticação
   */
  public async performLogin(payload: LoginPayload): Promise<HttpAsyncResult<TokenProxy>> {
    if (environment.mockupEnabled)
      return await performLoginMockup(payload);

    throw new Error('Não foi implementado');
  }

  /**
   * Método que autentica um usuário pelo e-mail e senha
   *
   * @param payload As informações necessárias para a autenticação
   */
  public async register(payload: CreateUserPayload): Promise<HttpAsyncResult<TokenProxy>> {
    if (environment.mockupEnabled)
      return await registerMockup(payload);

    throw new Error('Não foi implementado');
  }

  //#endregion

}
