//#region Imports

import { rand, randEmail, randFullName, randNumber } from '@ngneat/falso';

//#endregion

/**
 * As informações de um freelancer
 */
export interface FreelancerProxy {

  /**
   * A identificação do projeto
   */
  id: number;

  /**
   * O nome da pessoa
   */
  name: string;

  /**
   * As cores de uma pessoa
   */
  color: string;

  /**
   * O indice do avatar do usuário
   */
  avatarIndex: number;

  /**
   * A data de quando entrou
   */
  createdAt: string;

  /**
   * O e-mail da pessoa
   */
  email: string;

}

/**
 * Método que retorna uns valores de um freelance
 */
export function getFakeFreelanceProxy(): FreelancerProxy {
  return {
    id: 1,
    name: randFullName(),
    email: randEmail(),
    createdAt: new Date().toISOString(),
    color: rand(['#FF565E', '#3ED598', '#FFC542']),
    avatarIndex: randNumber({ min: 1, max: 4, precision: 1, fraction: 1 }),
  };
}
