const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./actions/data');

let user = null;

var actions = {
    login: function (name, pass, call) {
        console.log(name + ' ' + pass);
        var sql = `SELECT * FROM users WHERE username=? AND password=?`;

        db.get(sql, [name, pass], (err, row) => call(err, row));
    },
    logout: function () {
    },
    data: function (id) {

    },
    settings: function () {

    }
}

module.exports = actions;