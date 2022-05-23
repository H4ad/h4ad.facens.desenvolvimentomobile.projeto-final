/**
 * A interface que representa as informações necessárias para o login de um usuário
 */
export interface LoginPayload {

  /**
   * O nome de usuário
   */
  username: string;

  /**
   * A senha do usuário
   */
  password: string;

}
