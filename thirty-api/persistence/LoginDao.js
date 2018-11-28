function LoginDao(connection) {
    this._connection = connection;
}

LoginDao.prototype.create = function(user, callback) {
    this._connection.query('INSERT INTO user SET ?', user, callback);
}

LoginDao.prototype.readyByParams = function(email, pass, callback) {
    this._connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, pass], callback);
}

LoginDao.prototype.update = function(user, callback) {
    this._connection.query('UPDATE user SET email = ? where id = ?', [user.email, user.id], callback);
}

LoginDao.prototype.delete = function(id, callback) {
    this._connection.query('DELETE FROM user WHERE id = ?', [id], callback);
}

module.exports = function() {
    return LoginDao;
}
