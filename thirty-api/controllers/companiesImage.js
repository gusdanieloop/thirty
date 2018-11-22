module.exports = function(app) {

    app.get('/companies', function(req, res) {
        console.log('Requesição recebida.');
        res.send('200 - OK!');
    });

    app.get('/companies/companyImage/:id', function(req, res) {
        var idCompany = req.params.id;
        var connection = app.persistence.connectionFactory();
        var menuDao = new app.persistence.CompanyImageDao(connection);

        menuDao.readyByIdCompany(idCompany, function(error, result){
            if (error) {
                res.status(500).send(error);
                return;
            }
            res.status(200).send(result);
        });
    });
    
    app.post('/companies/companyImage', function(req, res) {
        console.log('Ok', req);
        
        req.assert("path", "Por favor informe uma quantidade de estrelas.").notEmpty();
        // req.assert("company_id", "Id do estabelecimento inválido.").notEmpty();

        var err = req.validationErrors();

        if (err) {
            console.log('Validation error finded.');
            res.status(400).send(err);
            return;
        }

        console.log('Processando uma requisicao de uma nova Menu.');
        var menu = req.body;
        menu.register_date = new Date;
        var connection = app.persistence.connectionFactory();
        var menuDao = new app.persistence.CompanyImageDao(connection);

        menuDao.create(menu, function(error, result) {
            if (error) {
                console.log('Erro ao inserir Menu.' + error);
                res.status(500).send(error);
            } else {
                menu.id = result.insertId;
                console.log('Menu inserida com sucesso.');
                res.location('/companies/companyImage/' + menu.id);
                var response = {
                    menu_content: menu,
                    links: [
                        {
                            href: 'http://localhost:3000/companies/' + menu.id,
                            rel: 'Confirm',
                            method: 'PUT'
                        },
                        {
                            href: 'http://localhost:3000/companies/' + menu.id,
                            rel: 'Cancel',
                            method: 'DELETE'
                        }
                    ]
                }
                res.status(201).json(response)
            }
        });

    });
    
    app.put('/companies/companyImage/:id', function(req, res) {
        var menu = {};
        var id = req.params.id;
        menu.id = id;
        var connection = app.persistence.connectionFactory();
        var menuDao = new app.persistence.CompanyImageDao(connection);

        menuDao.update(menu, function(error){
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Menu atualizado!');
            res.send(menu);
        })        
    });

    app.delete('/companies/companyImage/:id', function(req, res) {
        var menu = {};
        var id = req.params.id;
        menu.id = id;
        var connection = app.persistence.connectionFactory();
        var menuDao = new app.persistence.CompanyImageDao(connection);

        menuDao.delete(menu, function(error){
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Menu removido com sucesso!');
            res.status(204).send(menu);
        })
    });
    
}
