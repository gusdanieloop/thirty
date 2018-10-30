function CompanyDetailDao(connection) {
    this._connection = connection;
}

CompanyDetailDao.prototype.create = function(company, callback) {
    this._connection.query('INSERT INTO company SET ?', company, callback);
}

CompanyDetailDao.prototype.ready = function(error, callback) {
    this._connection.query('SELECT * FROM company', error, callback);
}

CompanyDetailDao.prototype.readyById = function(id, callback) {
    this._connection.query('SELECT * FROM company WHERE id = ?', [id], callback);
}

CompanyDetailDao.prototype.update = function(company, callback) {
    // this._connection.query('UPDATE company SET stars = ? where id = ?', [company.stars, company.id], callback);
}

CompanyDetailDao.prototype.delete = function(id, callback) {
    this._connection.query('DELETE FROM company WHERE id = ?', [id], callback);
}

module.exports = function() {
    return CompanyDetailDao;
}
