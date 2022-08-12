import { randomUUID } from "crypto";

export type Address = {
  zipCode: string;
  street: string;
  num: string;
  Neighborhood: string;
  complement: string;
  state: string;
  city: string;
};

export interface IClient {
  id: string;
  socialReason: string;
  cnpj: string;
  address: Address;
  phone: string;
  logo?: string;
  rating?: number;
  feedbacks?: string[];
}
export class Client implements IClient {
  id: string;
  socialReason: string;
  cnpj: string;
  address: Address;
  phone: string;
  logo?: string;
  rating?: number;
  feedbacks?: string[];

  constructor(input: Omit<IClient, 'id'>) {
    let client: Client

    Object.assign(client, {
      id: randomUUID,
      ...input,
    })
  }

  public static create(clientInput: Omit<IClient, 'id'>): Client {
    return new Client(clientInput);
  }
}
