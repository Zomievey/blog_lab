import * as dotenv from 'dotenv';

const result = dotenv.config();
console.log(result.parsed);
console.log(process.env.db_user, process.env.db_pass, process.env.db_host, process.env.db_schema);

export default {
    mysql: {
        user: process.env.db_user,
        password: process.env.db_pass,
        host: process.env.db_host,
        database: process.env.db_schema,
    }
};
