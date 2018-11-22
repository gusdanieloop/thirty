function CompanyImageDao(connection) {
    this._connection = connection;
}

CompanyImageDao.prototype.create = function(image, callback) {
    this._connection.query('INSERT INTO image SET ?', image, callback);
}

CompanyImageDao.prototype.ready = function(error, callback) {
    this._connection.query('SELECT * FROM image', error, callback);
}

CompanyImageDao.prototype.readyByIdCompany = function(id, callback) {
    this._connection.query('SELECT * FROM image WHERE company_id = ?', [id], callback);
}

CompanyImageDao.prototype.update = function(image, callback) {
    this._connection.query('UPDATE image SET path = ? where id = ?', [image.detail, image.id], callback);
}

CompanyImageDao.prototype.delete = function(id, callback) {
    this._connection.query('DELETE FROM image WHERE id = ?', [id], callback);
}

module.exports = function() {
    return CompanyImageDao;
}
