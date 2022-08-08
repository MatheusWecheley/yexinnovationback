import { Client } from 'services/models/client/Client';
import { IClientService } from '../clientService';

export class ClientServiceImpl implements IClientService {
  addClient(client: Client): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  
  updateClient(
    id: string,
    fieldsToUpdate: Partial<Client>
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  
  deleteClient(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  
  getClient(id: string): Promise<Client> {
    throw new Error('Method not implemented.');
  }
  
  listClients(
    first: number,
    after: string,
    filter: Partial<Client>
  ): Promise<Client[]> {
    throw new Error('Method not implemented.');
  }
}
