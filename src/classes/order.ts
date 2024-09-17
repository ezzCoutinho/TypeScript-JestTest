// injetando uma depedência em uma class -> construtor com o tipo da class

import { OrderStatus } from './interfaces/orderStatus-protocol';
import { MessagingProtocol } from '../services/interfaces/messaging-protocol';
import { PersistencyProtocol } from '../services/interfaces/persistency-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocols';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly msg: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho de compra está vazio.');
      return;
    }

    this._orderStatus = 'closed';
    this.msg.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()}, foi recebido.`,
    );

    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'O cliente é:',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
