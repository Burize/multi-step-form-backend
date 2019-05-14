import { Document } from 'mongoose';

export interface Country extends Document {
  readonly title: string;
  readonly code: string;
}
