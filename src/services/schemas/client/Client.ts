import { Schema, model, Model } from 'mongoose';
import type { IClient } from 'services/models/client/Client';

const ClientSchema = new Schema<IClient>({
  id: { type: String, required: true },
  socialReason: { type: String, required: true },
  cnpj: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    num: { type: String, required: true },
    Neighborhood: { type: String, required: true },
    complement: { type: String, required: false },
    state: { type: String, required: true },
    city: { type: String, required: true },
  },
  phone: { type: String, required: true },
  logo: { type: String, required: false },
  rating: { type: Number, required: false },
  feedbacks: [{ type: String, required: false }],
});

const ClientModel: Model<IClient> = model<IClient>(
  'Client',
  ClientSchema
);

export { ClientModel, IClient };
