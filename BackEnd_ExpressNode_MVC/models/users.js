const db = require('../util/database');

module.exports = class User {
    constructor(userId, firstName, lastName, email, password) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    static find(email) {
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }

    static save(user) {
        return db.execute(
            'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
            [user.firstName, user.lastName, user.email, user.password]
        );
    }
};