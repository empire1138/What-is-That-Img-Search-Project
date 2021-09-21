const db = require('../util/database');

module.exports = class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    static find(email) {
        return db.execute('SELECT * FROM user WHERE email = ?', [email]);
    }

    static save(user) {
        return db.execute(
            'INSERT INTO user (firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
            [user.firstName, user.lastName, user.email, user.password]
        );
    }
};