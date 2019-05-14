
import { Connection } from 'mongoose';
import { DomainSchema } from './schemas';

export const domainProviders = [
  {
    provide: 'Domain',
    useFactory: (connection: Connection) => connection.model('Domain', DomainSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
