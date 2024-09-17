// Mock se passa por um objeto(Class), para mockar o disconto.
// sut instancia duas classes pois, a shopping é dependente da Discount
// {sut, discountMock} -> retornando duas variáveis. >>> {sut}
// mock com interfaces >>> implements, com classes >>> extends
import { Discount } from './discount';
import { ShoppingCart } from './shopping-cart';
import { CartItemProtocol } from './interfaces/cartItem-protocol';

const createSul = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(createDiscountMock());
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItemProtocol {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSul();
  const cartItem1 = createCartItem('Camiseta', 30);
  const cartItem2 = createCartItem('Caneta', 3);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  afterEach(() => jest.clearAllMocks());

  it('should be an empty cart when no product is added', () => {
    const { sut } = createSul();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should have 0 cart items', () => {
    const { sut } = createSul();
    expect(sut.items.length).toBeLessThan(1);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(33);
    expect(sut.totalWithDiscount()).toBe(33);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products in cart', () => {
    const { sut } = createSutWithProducts();
    sut.removeItem(0);
    expect(sut.items.length).toBe(1);
    expect(sut.isEmpty()).toBe(false);
  });
});
