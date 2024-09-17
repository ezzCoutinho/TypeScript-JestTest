import { CartItemProtocol } from './interfaces/cartItem-protocol';

export class Product implements CartItemProtocol {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
