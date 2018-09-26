module.exports = function(app) {

    app.get('/companies', function(req, res) {
        console.log('Requesição recebida.');
        res.send('200 - OK!');
    });

    app.post('/companies/companyRating', function(req, res) {
        var rating = req.body;
        console.log(rating);
        
        rating.status = ' CREATED';
        rating.date = new Date;

        var connection = new app.persistence.connectionFactory;
        // var ratingDAO = new app.persistence;

        res.send('OK.')
    });

}
