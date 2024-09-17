// it/teste recebe dois elementos(descrição, função), podem dividir testes
// expect() ->.toBe(), espero que seja é mais usado em valores primitivos
// .not -> não seja, negação
// describe -> qpermite que tenha testes/describe dentro dele, pode ser criado
// mais de uma vez. ELE AGRUPA

describe('TESTANDO ALGUMA COISA', () => {
  it('should return 1', () => {
    const number: number = 1;
    expect(number).toBe(1);
  });
  test('should return Luiz', () => {
    const nome: string = 'Luiz';
    expect(nome).toBe('Luiz');
  });
});

// describe('TESTANDO OUTRA COISA', () => {
//   it('descrição do teste (IT)', () => {
//     const number: number = 1;
//     expect(number).not.toBe(1);
//   });
//   test('descrição do teste (TEST)', () => {
//     const nome: string = 'Luiz';
//     expect(nome).not.toBe('Luiz');
//   });
// });
