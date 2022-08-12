import { Model } from 'mongoose';
import { Client } from 'services/models/client/Client';
import { ClientModel } from 'services/schemas/client/Client';

export interface IClientRepo {
  getSchema(): Model;

  createClient(): boolean;

  getClient(): Client;
}

export class ClientRepo implements IClientRepo {}
