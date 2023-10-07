import { DataSource } from 'typeorm';
import { app } from 'electron';
import path from 'path';

const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../../assets');

function connectDb() {
  return new DataSource({
    type: 'sqlite',
    database: path.join(RESOURCES_PATH, 'database', 'main.db'),
    synchronize: true,
    //  logging: true,
    entities: [],
  });
}

const appDataSource = connectDb();

export function initializeDB() {
  return appDataSource.initialize();
}

export default appDataSource;
