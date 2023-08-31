import 'reflect-metadata';
import { typeOrmConfig } from '../ormconfig';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource(typeOrmConfig);
