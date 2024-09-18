import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  tradeName: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, tradeName, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('should have individualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer(
      'Luiz',
      'Otávio',
      '574.423.432-23',
    );
    expect(sut.firstName).toBe('Luiz');
    expect(sut.lastName).toBe('Otávio');
    expect(sut.cpf).toBe('574.423.432-23');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer(
      'Luiz',
      'Otávio',
      '574.423.432-23',
    );
    expect(sut.getName()).toBe('Luiz');
    expect(sut.getIDN()).toBe('574.423.432-23');
  });
});

describe('should have enterpriseCustomerj', () => {
  it('should have name, tradeName and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', 'Pai dos burros', '222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('tradeName', 'Pai dos burros');
    expect(sut).toHaveProperty('cnpj', '222');
  });
  it('should have name and cpnj for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Udemy', 'Pai dos burros', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
