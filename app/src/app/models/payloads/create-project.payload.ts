/**
 * A interface que representa as informações necessárias para a criação de um projeto
 */
export interface CreateProjectPayload {

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
   * A identificação da categoria selecionada para o projetoo
   */
  categoryId: number;

}
