import knex from "knex";

const connection = knex({
    client: 'mysql',
    connection: {
        host: '35.226.146.116',
        user: '2136084-elaini-coelho',
        password: 'GeJ8h3de$7zSI4IrgZTX',
        database: 'molina-2136084-elaini-coelho',
        multiStatements: true
    }
});

export default connection;