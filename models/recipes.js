const db = require("../db/db");

const Recipe = {
  create(user_id, name, spoonacular_id, notes, rating) {
    params = [user_id, name, spoonacular_id, notes, rating];
    const sql = `
        INSERT INTO recipes(user_id, name, spoonacular_id, notes, rating)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *
    `;

    return db.query(sql, params).then((dbResult) => {
      return dbResult.rows[0];
    });
  },
  update() {}, //TODO
  delete() {}, //TODO
};

module.exports = Recipe;
