// toEqual -> para igual Mais usado para Objetos.
// toBeGreaterThan -> seja maior que
// toBeLessThan -> seja menor que
// toBeGreaterThanOrEqual -> maior que ou igual a que
// toBeLessThanOrEqual -> menor ou igual a que
// toBeCloseTo -> é perto de números flutuantes.
// toHaveProperty -> verifica se tem uma propriedade. Recebendo dois elementos
// ('propriedade', valor)

describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const numero: number = 10;

    expect(numero).toBeLessThan(11);
    expect(numero).toBeLessThanOrEqual(10);

    expect(numero).toBeCloseTo(10.004);

    expect(numero).not.toBeNull();

    expect(numero).toHaveProperty('toString');
  });

  it('should split tests', () => {
    const numero = 10;

    expect(numero).toBe(10);
    expect(numero).toEqual(10);

    expect(numero).not.toBeFalsy();
    expect(numero).toBeTruthy();

    expect(numero).toBeGreaterThan(9);
    expect(numero).toBeGreaterThanOrEqual(10);
  });
});

describe('Obejcts', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(anotherPerson).toHaveProperty('age', 30);
    expect(anotherPerson).not.toHaveProperty('lastName', 'Otávio');

    expect(person.name).toBe('Luiz');
  });
});
