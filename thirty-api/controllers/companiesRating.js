module.exports = function(app) {

    app.get('/companies', function(req, res) {
        console.log('Requesição recebida.');
        res.send('200 - OK!');
    });

    app.post('/companies/companyRating', function(req, res) {
        req.assert('forma_de_pagamento', 'Forma de pagamento é obrigatório').notEmpty();
        req.assert('valor', 'Forma de pagamento é obrigatório e deve ser decimal').notEmpty().isFloat();

        var err = req.validationErrors();

        if (err) {
            console.log('Validation error finded.');
            res.status(400).send(err);
        }
        var rating = req.body;
        
        rating.status = 'CREATED';
        rating.date = new Date;

        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyRatingDao(connection);

        ratingDao.insert(rating, function(error, result) {
            if (error) {
                console.log('Erro ao inserir avaliação.' + error);
                res.status(400).send(error);
            } else {
                console.log('Avaliação inserida com sucesso.');
                res.location('/companies/companyRating/' +
                    result.insertId);
                res.status(201).json(rating)
            }
        });

    });
    
}

// curl http://localhost:3000/companies/companyRating -X POST -v -H "Content-type: application/json" -d @files/companies.json; echo
