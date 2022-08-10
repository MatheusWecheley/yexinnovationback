import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String },
  lastName: { type: String },
  phone: { type: Number },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const UserModel = model('User', UserSchema);
