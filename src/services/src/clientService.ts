import { Client } from '../models/client/Client';

export interface IClientService {
  addClient(client: Client): Promise<boolean>;

  updateClient(
    id: string,
    fieldsToUpdate: Partial<Client>
  ): Promise<boolean>;

  deleteClient(id: string): Promise<boolean>;

  getClient(id: string): Promise<Client>;

  listClients(
    first: number,
    after: string,
    filter: Partial<Client>
  ): Promise<Client[]>;
}
