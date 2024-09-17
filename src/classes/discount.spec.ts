import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('FiftyPercentDiscount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(5);
  });

  it('should have no discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
