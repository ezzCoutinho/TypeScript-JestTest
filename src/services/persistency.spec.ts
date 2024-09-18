// sut -> padrão de instânciamento de classes em testes.
// jest.spyOn -> Recebe dois elementos,(objeto, 'método')
// afterEach -> depois de cada um dos testes
// jest.clearAllMocks() -> limpa todos os mocks

import { Persistency } from './persistency';

const createSut = () => {
  return new Persistency();
};

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under test
    const sut = createSut();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
  });

  it('should call console.log with "Pedido salvo com sucesso!"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!');
  });
});
