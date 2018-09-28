function CompanyRatingDao(connection) {
    this._connection = connection;
}

CompanyRatingDao.prototype.insert = function(rating, callback) {
    this._connection.query('INSERT INTO companies SET ?', rating, callback);
}

CompanyRatingDao.prototype.select = function(callback) {
    this._connection.query('SELECT * FROM companies', callback);
}

CompanyRatingDao.prototype.selectById = function(id, callback) {
    this._connection.query('SELECT * FROM companies WHERE id = ?', [id], callback);
}

module.exports = function() {
    return CompanyRatingDao;
}
