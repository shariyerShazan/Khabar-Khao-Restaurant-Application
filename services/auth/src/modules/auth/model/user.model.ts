import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: 'RIDER' | 'CUSTOMER' | 'RESTAURANT' | null;
  image: string ;
}



const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: null
  },
  role: {
    type: String,
    enum: ['RIDER', 'CUSTOMER', 'RESTAURANT', null],
    default: null,
  },
}, {
    timestamps: true
});

export const User = mongoose.model<IUser>('User', userSchema);