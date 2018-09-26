function CompanyRatingDAO(connection) {
    this._connection = connection;
}

CompanyRatingDAO.prototype.insert = function(company, callback) {
    this._connection.query('INSER INTO companies SET ?', company, callback);
}

CompanyRatingDAO.prototype.select = function(callback) {
    this._connection.query('SELECT * FROM companies', callback);
}

CompanyRatingDAO.prototype.selectById = function(id, callback) {
    this._connection.query('SELECT * FROM companies WHERE id = ', id, callback);
}