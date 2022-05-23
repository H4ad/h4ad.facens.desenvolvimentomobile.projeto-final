//#region Imports

import { HttpAsyncResult } from '../../models/interfaces/http-async-result';
import { CreateUserPayload } from '../../models/payloads/create-user.payload';
import { LoginPayload } from '../../models/payloads/login.payload';
import { getFakeTokenProxy, TokenProxy } from '../../models/proxies/token.proxy';

//#endregion

/**
 * Método que realiza a autenticação de um usuário de forma mockada
 *
 * @param payload As informações necessárias para a autenticação de um usuário
 */
export async function performLoginMockup(payload: LoginPayload): Promise<HttpAsyncResult<TokenProxy>> {
  return {
    success: getFakeTokenProxy(),
  };
}

/**
 * Método que autentica um usuário pelo e-mail e senha
 *
 * @param payload As informações necessárias para a autenticação
 */
export async function registerMockup(payload: CreateUserPayload): Promise<HttpAsyncResult<TokenProxy>> {
  return {
    success: getFakeTokenProxy(),
  };
}
