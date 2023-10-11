const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: 'root',
    database: 'postgres'
})

client.connect();




async function createTable() {
    let query = 'CREATE TABLE mobile (user_id serial PRIMARY KEY,role_name VARCHAR(255) UNIQUE NOT NULL)'
    client.query(query, (err, data) => {
        console.log("error", err);
        console.log("data", data);
        if (!err) {
            console.log(data.rows);
        } else {
            console.log("error", err.message);
        }
        client.end;
    })
}

async function getData() {
    client.query("select * from accounts", (err, data) => {
        console.log("error", err);
        console.log("data", data);
        if (!err) {
            console.log(data.rows);
        } else {
            console.log("error", err.message);
        }
        client.end;
    })
}
async function insertData(role_name) {
    client.query(`insert into accounts(role_name) values ('${role_name}')`, (err, data) => {
        console.log("error", err);
        console.log("data", data);
        if (!err) {
            console.log(data.rows);
        } else {
            console.log("error", err.message);
        }
        client.end;
    })
}

// createTable()
getData()
// insertData("STUDENT")
