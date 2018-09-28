module.exports = function(app) {

    app.get('/companies', function(req, res) {
        console.log('Requesição recebida.');
        res.send('200 - OK!');
    });

    app.post('/companies/companyRating', function(req, res) {
        var rating = req.body;
        
        rating.status = 'CREATED';
        rating.date = new Date;

        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyRatingDao(connection);

        ratingDao.insert(rating, function(error, result){
            if (error) {
                res.send(error);
            } else {
                console.log('Avaliação inserida com sucesso.');
                res.json(rating)
            }
        });

    });

}
