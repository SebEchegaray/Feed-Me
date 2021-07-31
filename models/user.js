const db = require("../db/db");
const bcrypt = require("bcrypt");

const User = {
    create(name, email, password) {
        const password_digest = bcrypt.hashSync(
            password,
            bcrypt.genSaltSync(10)
        );

        const sql = `
        INSERT INTO users(name, email, password_digest)
        VALUES($1, $2, $3)
        RETURNING *
    `;

        //db.query is an async function and returns a promise object

        const user = db
            .query(sql, [name, email, password_digest])
            .then((dbResult) => {
                return dbResult.rows[0];
            });

        return user;
    },

    get(email) {
        const sql = `
        SELECT * FROM users WHERE email = $1
    `;
        const user = db.query(sql, [email]).then((dbResult) => {
            return dbResult.rows[0];
        });

        return user;
    },
    update() {}, //TODO
    delete() {}, //TODO
};

module.exports = User;
