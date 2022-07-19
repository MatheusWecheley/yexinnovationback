import { Client } from '../models/client/Client';

export const ClientServiceType = Symbol.for('ClientServiceType');

export interface IClientService {
  addClient(client: Client): boolean;

  updateClient(
    id: string,
    fieldsToUpdate: Partial<Client>
  ): boolean;

  deleteClient(id: string): boolean;

  getClient(id: string): Client;

  listClients(
    first: number,
    after: string,
    filter: Partial<Client>
  ): Client[];
}
