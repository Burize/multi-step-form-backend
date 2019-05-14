
import { Connection } from 'mongoose';
import { CountrySchema } from './schemas';

export const countryProviders = [
  {
    provide: 'Country',
    useFactory: (connection: Connection) => connection.model('Country', CountrySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
