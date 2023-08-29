import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

export const typeOrmConfig : PostgresConnectionOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    ssl: true,
    synchronize: process.env.NODE_ENV !== 'prod',
    logging: process.env.NODE_ENV !== 'prod',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*{.ts,.js}'],
    subscribers: [],
  }