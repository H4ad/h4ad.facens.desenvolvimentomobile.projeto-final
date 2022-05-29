/**
 * A interface que representa as informações necessárias para atualizar um freelancer
 */
export interface UpdateFreelancerPayload {

  /**
   * O nome de usuário
   */
  name: string;

  /**
   * O indice do avatar do usuário
   */
  personAvatarIndex: number;

}
