/** Database for lunchly */

const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "Marist23", // Ensure this is a string
    database: "lunchly"
});

client.connect();

module.exports = client;