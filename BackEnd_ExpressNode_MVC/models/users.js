const db = require('../util/database');

module.exports = class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    static find(email) {
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }

    static save(user) {
        return db.execute(
            'INSERT INTO users (userName, email, password) VALUES (?, ?, ?)',
            [user.userName, user.email, user.password]
        );
    }
};