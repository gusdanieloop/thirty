module.exports = function(app) {

    app.get('/companies', function(req, res) {
        console.log('Requesição recebida.');
        res.send('200 - OK!');
    });

    app.get('/companies/companyDetail', function(req, res) {
        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyDetailDao(connection);
        ratingDao.ready(function(error, result){
            if (error) {
                res.status(500).send(error);
                return;
            }
            res.status(200).send(result);
        });
    });

    app.post('/companies/companyDetail', function(req, res) {
        console.log('Processando o cadastramento de uma nova companhia.');

        req.assert("main_name", "Por favor informe uma quantidade de estrelas.").notEmpty();
        req.assert("secondary_name", "Seu comentário é importante para nós.").notEmpty();
        req.assert("address", "Seu comentário é importante para nós.").notEmpty();
        req.assert("address_number", "Seu comentário é importante para nós.").notEmpty();
        req.assert("city", "Seu comentário é importante para nós.").notEmpty();
        req.assert("company_type", "Seu comentário é importante para nós.").notEmpty();
        req.assert("description", "Seu comentário é importante para nós.").notEmpty();

        var err = req.validationErrors();

        if (err) {
            console.log('Validation error finded.');
            res.status(400).send(err);
            return;
        }
        var rating = req.body;
        
        rating.register_date = new Date;

        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyDetailDao(connection);

        ratingDao.create(rating, function(error, result) {
            if (error) {
                console.log('Erro ao inserir companhia.' + error);
                res.status(500).send(error);
            } else {
                rating.id = result.insertId;
                console.log('Avaliação inserida com sucesso.');
                res.location('/companies/companyDetail/' + rating.id);
                var response = {
                    rating_content: rating,
                    links: [
                        {
                            href: 'http://localhost:3000/companies/companyDetail/' + rating.id,
                            rel: 'Update',
                            method: 'PUT'
                        },
                        {
                            href: 'http://localhost:3000/companies/companyDetail/' + rating.id,
                            rel: 'Delete',
                            method: 'DELETE'
                        }
                    ]
                }
                res.status(201).json(response)
            }
        });

    });
    
    app.put('/companies/companyDetail/:id', function(req, res) {
        var rating = {};
        var id = req.params.id;
        rating.id = id;

        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyDetailDao(connection);

        ratingDao.update(rating, function(error){
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Companhia atualizada com sucesso!');
            res.send(rating);
        })        
    });

    app.delete('/companies/companyDetail/:id', function(req, res) {
        var rating = {};
        var id = req.params.id;

        rating.id = id;

        var connection = app.persistence.connectionFactory();
        var ratingDao = new app.persistence.CompanyDetailDao(connection);

        ratingDao.delete(rating, function(error){
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Companhia removida com sucesso!');
            res.status(204).send(rating);
        })
    });
    
}
