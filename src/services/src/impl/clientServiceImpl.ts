import { Client } from 'services/models/client/Client';
import { IClientService } from '../clientService';

export class ClientServiceImpl implements IClientService {
  addClient(client: Client): boolean {
    throw new Error('Method not implemented.');
  }
  updateClient(
    id: string,
    fieldsToUpdate: Partial<Client>
  ): boolean {
    throw new Error('Method not implemented.');
  }
  deleteClient(id: string): boolean {
    throw new Error('Method not implemented.');
  }
  getClient(id: string): Client {
    throw new Error('Method not implemented.');
  }
  listClients(
    first: number,
    after: string,
    filter: Partial<Client>
  ): Client[] {
    throw new Error('Method not implemented.');
  }
}
