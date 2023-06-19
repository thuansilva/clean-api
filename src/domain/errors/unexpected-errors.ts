export class UnexpectedError extends Error {
  constructor() {
    super('Algo de Errado Aconteceu. Tente novamente em breve.');
    this.name = 'UnexpectedError';
  }
}
