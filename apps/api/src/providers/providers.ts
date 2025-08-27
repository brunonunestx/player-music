import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

export const providers = {
  auth: AuthModule,
  database: DatabaseModule,
};
