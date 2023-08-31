import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

export const typeOrmConfig : PostgresConnectionOptions = {
    type: 'postgres',
    database:"",
    username:"",
    password:"",
    host:"",
    port: 5432,
    schema: "public",
    applicationName:"dms-administrator",
    synchronize: process.env.NODE_ENV !== 'prod',
    logging: process.env.NODE_ENV !== 'prod',
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    migrations: ['src/migration/**/*{.ts,.js}'],
    subscribers: [],
  }