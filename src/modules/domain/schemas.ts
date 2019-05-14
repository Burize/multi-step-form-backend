import * as mongoose from 'mongoose';

export const DomainSchema = new mongoose.Schema({
  domain: String,
  postfix: String,
  country: String,
  additionalInfo: String,
  cpuCores: Number,
  cpuFrequency: Number,
  ram: Number,
  driveType: String,
  driveSpace: Number,
  os: String,
  email: String,
  phone: String,
  leasePeriod: Number,
  activeAt: Number,
});
