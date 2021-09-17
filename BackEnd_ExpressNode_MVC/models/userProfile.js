const db = require('../util/database');

module.exports = class UserProfile {
    constructor(userId, firstName, lastName, email, password, imageName, ImageId) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.imageName = imageName;
        this.ImageId = ImageId;
    }

    static findUser(email) {
        return db.execute('SELECT * FROM users WHERE email = ?', [email]);
    }

    static saveProfile(user) {
        return db.execute(
            'INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?)',
            [user.firstName, user.lastName, user.email, user.password]
        );
    }

    static allImagesByUser(userId) {
        return db.execute(
            'SELECT * FROM images WHERE userId = ?', [userId]);
    }
};