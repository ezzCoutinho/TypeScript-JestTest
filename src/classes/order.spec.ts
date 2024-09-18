/* eslint-disable @typescript-eslint/no-unused-vars */
// Mocks podem retornar qualquer coisa, naqueles que infere tipo de retorno.
// Mocks acontecem mais com classes de nível alto.
// toHaveBeenCalledTimes -> foi chamado quantas vezes()
// depos do spy().mockReturnValueOnce(valor desejado), mocl retorne um valor.
import { MessagingProtocol } from '../services/interfaces/messaging-protocol';
import { PersistencyProtocol } from '../services/interfaces/persistency-protocol';
import { CartItemProtocol } from './interfaces/cartItem-protocol';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocols';
import { Order } from './order';

describe('Order', () => {
  class ShoppingMock implements ShoppingCartProtocol {
    get items(): Readonly<CartItemProtocol[]> {
      return [];
    }
    addItem(item: CartItemProtocol): void {}
    removeItem(index: number): void {}
    total(): number {
      return 1;
    }
    totalWithDiscount(): number {
      return 2;
    }
    isEmpty(): boolean {
      return false;
    }
    clear(): void {}
  }

  class MessagingMock implements MessagingProtocol {
    sendMessage(msg: string): void {}
  }

  class PersistencyMock implements PersistencyProtocol {
    saveOrder(): void {}
  }

  class CustomerMock implements CustomerOrder {
    getName(): string {
      return 'Hello';
    }
    getIDN(): string {
      return 'World';
    }
  }

  const createSut = () => {
    const shoppingCartMock = new ShoppingMock();
    const messagingMock = new MessagingMock();
    const persistencyMock = new PersistencyMock();
    const customerMock = new CustomerMock();
    const sut = new Order(
      shoppingCartMock,
      messagingMock,
      persistencyMock,
      customerMock,
    );
    return {
      sut,
      shoppingCartMock,
      messagingMock,
      persistencyMock,
      customerMock,
    };
  };

  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should call once sendMessage', () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
    sut.checkout();
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should send an email to customer', () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
    sut.checkout();
    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save saveOrder', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear the cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
