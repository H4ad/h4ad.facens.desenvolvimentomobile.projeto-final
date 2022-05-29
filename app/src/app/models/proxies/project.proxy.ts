//#region Imports

import { rand, randFullName, randNumber, randParagraph } from '@ngneat/falso';
import { CategoryProxy, getFakeCategoryProxy } from './category.proxy';

//#endregion

/**
 * As informações de um projeto
 */
export interface ProjectProxy {

  /**
   * A identificação do projeto
   */
  id: number;

  /**
   * As cores de uma pessoa
   */
  personColor: string;

  /**
   * O emoji para a pessoa
   */
  personEmoji: string;

  /**
   * O nome da pessoa
   */
  personName: string;

  /**
   * A data de quando foi criado esse projeto
   */
  createdAt: string;

  /**
   * A mensagem do projeto
   */
  message: string;

  /**
   * O budget do projeto
   */
  budget: number;

  /**
   * O e-mail para entrar em contato sobre o projeto
   */
  email: string;

  /**
   * A categoria selecionada para o projetoo
   */
  category: CategoryProxy;

}

/**
 * Método que retorna uns valores de um projeto
 */
export function getFakeProjectProxy(): ProjectProxy {
  return {
    id: 1,
    email: '180618@facens.br',
    personName: randFullName(),
    personColor: rand(['#FF565E', '#3ED598', '#FFC542']),
    personEmoji: `/assets/images/avatar_${ randNumber({ min: 1, max: 4, precision: 1, fraction: 1 }) }.png`,
    message: randParagraph({ length: 2 }).join('. '),
    createdAt: new Date().toISOString(),
    budget: randNumber({ min: 200, max: 500, fraction: 1, precision: 1 }),
    category: getFakeCategoryProxy(),
  };
}
