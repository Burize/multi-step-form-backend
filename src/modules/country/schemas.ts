import * as mongoose from 'mongoose';

export const CountrySchema = new mongoose.Schema({
  code: String,
  title: String,
});
