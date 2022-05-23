/**
 * A interface que representa informações do token de autenticação do usuário
 */
export interface TokenProxy {

  /**
   * O token JWT para acessar a API
   */
  token: string;

}

/**
 * Método que retorna uns valores de uma autenticação
 */
export function getFakeTokenProxy(): TokenProxy {
  return {
    token: 'Bearer ...',
  };
}
