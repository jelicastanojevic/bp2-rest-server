import { createPool, Pool, PoolConnection } from 'mysql';

import { config } from '../config';

let pool: Pool;

export const Database = {
  initialize() {
    pool = createPool({
      host: config.DB_HOST,
      database: config.DB_DATABASE,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
    });
  },
  executeQuery(query: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      pool.query(query, params, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
  },
  getConnection(): Promise<any> {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        err ? reject(err) : resolve(connection);
      });
    });
  },
  executeConnectionQuery(
    connection: PoolConnection,
    query: string,
    params: any[] = []
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      connection.query(query, params, (err, results) => {
        err ? reject(err) : resolve(results);
      });
    });
  },
  testCreateResult(result: any, affectedRows: number, error: Error) {
    if (result.affectedRows === affectedRows) {
      return result.insertId;
    } else {
      throw error;
    }
  },
  testUpdateOrDeleteResult(result: any, affectedRows: number, error: Error) {
    if (result.affectedRows !== affectedRows) {
      throw error;
    }
  },
};
