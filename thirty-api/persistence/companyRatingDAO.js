function CompanyRatingDao(connection) {
    this._connection = connection;
}

CompanyRatingDao.prototype.create = function(rating, callback) {
    this._connection.query('INSERT INTO rating SET ?', rating, callback);
}

CompanyRatingDao.prototype.ready = function(callback) {
    this._connection.query('SELECT * FROM rating', callback);
}

CompanyRatingDao.prototype.readyById = function(id, callback) {
    this._connection.query('SELECT * FROM rating WHERE id = ?', [id], callback);
}

CompanyRatingDao.prototype.update = function(rating, callback) {
    this._connection.query('UPDATE rating SET stars = ? where id = ?', [rating.stars, rating.id], callback);
}

CompanyRatingDao.prototype.delete = function(id, callback) {
    this._connection.query('DELETE FROM rating WHERE id = ?', [id], callback);
}

module.exports = function() {
    return CompanyRatingDao;
}
