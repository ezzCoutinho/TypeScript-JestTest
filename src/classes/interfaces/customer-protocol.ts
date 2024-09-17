// utlizando uma interface, para pegar os nomes(métodos) dos protocolos
// e implementar nas class que lá utilizam.
export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  tradeName: string;
  cnpj: string;
}
