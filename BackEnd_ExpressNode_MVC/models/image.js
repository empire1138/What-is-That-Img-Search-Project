const db = require('../util/database');
// This will need to be change to allow the google tags and the Algolia indexing 

module.exports = class image {
  constructor(title, body, user) {
    this.title = title;
    this.body = body;
    this.userName = userName;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM images');
  }
  static fetchOne(id){
      return db.execute('SELECT * FROM images WHERE id = ?', [id])
  }

  static save(image) {
    return db.execute(
      'INSERT INTO images (title, body, userName) VALUES (?, ?, ?)',
      [image.title, image.body, image.userName]
    );
  }
  static update(id, tags){
      return db.execute('UPDATE images SET tags = ? WHERE id = ? ', [tags, id])
  }

  static delete(id) {
    return db.execute('DELETE FROM image WHERE id = ?', [id]);
  }
};