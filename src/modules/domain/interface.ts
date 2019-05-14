import { Document } from 'mongoose';

export interface IDomain extends Document {
  domain: string;
  postfix: string;
  country: string;
  additionalInfo: string;
  cpuCores: number;
  cpuFrequency: number;
  ram: number;
  driveType: string;
  driveSpace: number;
  os: string;
  email: string;
  phone: string;
  leasePeriod: number;
  activeAt: number;
}
