import * as dotenv from 'dotenv';

dotenv.config();

export default {
    mysql: {
        user: process.env.db_user,
        password: process.env.db_password,
        host: process.env.db_host,
        database: process.env.db_schema,
    }
};
