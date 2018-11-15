function CompanyMenuDao(connection) {
    this._connection = connection;
}

CompanyMenuDao.prototype.create = function(menu, callback) {
    this._connection.query('INSERT INTO menu SET ?', menu, callback);
}

CompanyMenuDao.prototype.ready = function(error, callback) {
    this._connection.query('SELECT * FROM menu', error, callback);
}

CompanyMenuDao.prototype.readyByIdCompany = function(id, callback) {
    this._connection.query('SELECT * FROM menu WHERE company_id = ?', [id], callback);
}

CompanyMenuDao.prototype.update = function(menu, callback) {
    this._connection.query('UPDATE menu SET detail = ? where id = ?', [menu.detail, menu.id], callback);
}

CompanyMenuDao.prototype.delete = function(id, callback) {
    this._connection.query('DELETE FROM menu WHERE id = ?', [id], callback);
}

module.exports = function() {
    return CompanyMenuDao;
}
