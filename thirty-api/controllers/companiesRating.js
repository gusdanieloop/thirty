module.exports = function(app) {

    app.get('/companies', function(req, res) {
        console.log('Requesição recebida.');
        res.send('200 - OK!');
    });

    app.get('/companies/companyRating', function(req, res) {
        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyRatingDao(connection);

        ratingDao.ready(rating, function(error){
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Avaliação removida com sucesso!');
            res.status(204).send(rating);
        })
    });

    app.post('/companies/companyRating', function(req, res) {

        console.log('Ok', req);
        
        req.assert("stars", "Por favor informe uma quantidade de estrelas.").notEmpty();
        req.assert("comment", "Seu comentário é importante para nós.").notEmpty();

        var err = req.validationErrors();

        if (err) {
            console.log('Validation error finded.');
            res.status(400).send(err);
            return;
        }
        var rating = req.body;
        console.log('Processando uma requisicao de uma nova avaliação.');
        
        // rating.status = 'CREATED';
        rating.register_date = new Date;

        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyRatingDao(connection);

        ratingDao.create(rating, function(error, result) {
            if (error) {
                console.log('Erro ao inserir avaliação.' + error);
                res.status(500).send(error);
            } else {
                rating.id = result.insertId;
                console.log('Avaliação inserida com sucesso.');
                res.location('/companies/companyRating/' + rating.id);
                var response = {
                    rating_content: rating,
                    links: [
                        {
                            href: 'http://localhost:3000/companies/' + rating.id,
                            rel: 'Confirm',
                            method: 'PUT'
                        },
                        {
                            href: 'http://localhost:3000/companies/' + rating.id,
                            rel: 'Cancel',
                            method: 'DELETE'
                        }
                    ]
                }
                res.status(201).json(response)
            }
        });

    });
    
    app.put('/companies/companyRating/:id', function(req, res) {
        var rating = {};
        var id = req.params.id;
        rating.id = id;
        // rating.status = 'CONFIRMED';

        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyRatingDao(connection);

        ratingDao.update(rating, function(error){
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Avaliação confirmada!');
            res.send(rating);
        })        
        });

    app.delete('/companies/companyRating/:id', function(req, res) {
        var rating = {};
        var id = req.params.id;

        rating.id = id;
        // rating.status = 'CANCELED';

        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyRatingDao(connection);

        ratingDao.delete(rating, function(error){
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Avaliação removida com sucesso!');
            res.status(204).send(rating);
        })
    });
    
}

// curl http://localhost:3000/companies/companyRating -X POST -v -H "Content-type: application/json" -d @files/companies.json; echo
