/**
 * A interface que representa as informações necessárias para criar um usuário
 */
export interface CreateUserPayload {

  /**
   * O nome de usuário
   */
  name: string;

  /**
   * O indice do avatar do usuário
   */
  personAvatarIndex: number;

  /**
   * O nome de usuário
   */
  email: string;

  /**
   * A senha do usuário
   */
  password: string;

}
