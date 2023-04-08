require('dotenv/config')
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";



const dbConfig: MysqlConnectionOptions  = {
  type: 'mysql',
  port: +(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // entities: [],
  synchronize: true
}

export default dbConfig