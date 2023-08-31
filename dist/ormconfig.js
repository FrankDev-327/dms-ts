"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    database: "dms",
    username: "postgres",
    password: "postgres",
    host: "10.5.0.5",
    port: 5432,
    schema: "public",
    applicationName: "dms-administrator",
    synchronize: process.env.NODE_ENV !== 'prod',
    logging: process.env.NODE_ENV !== 'prod',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: ['src/migration/**/*{.ts,.js}'],
    subscribers: [],
};
//# sourceMappingURL=ormconfig.js.map