import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return name "Camiseta"', () => {
    const sut = createSut('Camiseta', 49.9);
    expect(sut.name).toBe('Camiseta');
  });

  it('should return price "49.9"', () => {
    const sut = createSut('Camiseta', 49.9);
    expect(sut.price).toBeCloseTo(49.9);
  });
});
