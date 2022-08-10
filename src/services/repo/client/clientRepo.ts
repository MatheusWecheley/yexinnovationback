import { Model } from 'mongoose';
import { Client } from 'services/models/client/Client';
import { ClientModel } from 'services/schemas/client/Client';

export interface IClientRepo {
  addClient(clientInput: Client): Promise<boolean>;

  client(id: string): Promise<Client>;

  clients(
    first: number,
    after: string,
    filter: Partial<Client>
  ): Promise<Client[]>;

  updateClient(id: string, fieldsToUpdate: Partial<Client>): Promise<boolean>;
}
export class ClientRepo implements IClientRepo {
  getRepo: Model<Client>;
  constructor() {
    this.getRepo = ClientModel;
  }

  async addClient(clientInput: Client): Promise<boolean> {
    const isCreated = await this.getRepo.create(clientInput);

    if (isCreated.populated) {
      return true;
    }
    return false;
  }

  async client(id: string): Promise<Client | null> {
    const clientFound = await this.getRepo.findById(id);

    if (clientFound._id) {
      return clientFound;
    }
    return null;
  }

  async clients(
    first: number,
    after: string,
    filter: Partial<Client>
  ): Promise<Client[]> {
    throw new Error('Method not implemented');
  }

  async updateClient(
    id: string,
    fieldsToUpdate: Partial<Client>
  ): Promise<boolean> {
    const clientFoundAndUpdated = await this.getRepo.findByIdAndUpdate(id);

    if (!clientFoundAndUpdated._id) {
      return false;
    }
    return true;
  }
}
