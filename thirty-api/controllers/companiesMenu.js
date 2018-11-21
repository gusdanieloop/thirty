module.exports = function(app) {

    app.get('/companies', function(req, res) {
        console.log('Requesição recebida.');
        res.send('200 - OK!');
    });

    app.get('/companies/companyMenu', function(req, res) {
        const fP = req.query.firstParameter;
        const sP = req.query.secondParameter;
        var connection = app.persistence.connectionFactory();
        var menuDao = new app.persistence.CompanyMenuDao(connection);
        menuDao.readyByParams(fP, sP,function(error, result){
            if (error) {
                res.status(500).send(error);
                return;
            }
            res.status(200).send(result);
        });
    });

    app.post('/companies/companyMenu', function(req, res) {
        console.log('Ok', req);
        
        req.assert("name", "Por favor informe uma quantidade de estrelas.").notEmpty();
        req.assert("detail", "Seu comentário é importante para nós.").notEmpty();
        req.assert("image_url", "Seu comentário é importante para nós.").notEmpty();
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
        var menuDao = new app.persistence.CompanyMenuDao(connection);

        menuDao.create(menu, function(error, result) {
            if (error) {
                console.log('Erro ao inserir Menu.' + error);
                res.status(500).send(error);
            } else {
                menu.id = result.insertId;
                console.log('Menu inserida com sucesso.');
                res.location('/companies/companyMenu/' + menu.id);
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
    
    app.put('/companies/companyMenu/:id', function(req, res) {
        var menu = {};
        var id = req.params.id;
        menu.id = id;
        var connection = app.persistence.connectionFactory();
        var menuDao = new app.persistence.CompanyMenuDao(connection);

        menuDao.update(menu, function(error){
            if (error) {
                res.status(500).send(error);
                return;
            }
            console.log('Menu atualizado!');
            res.send(menu);
        })        
    });

    app.delete('/companies/companyMenu/:id', function(req, res) {
        var menu = {};
        var id = req.params.id;
        menu.id = id;
        var connection = app.persistence.connectionFactory();
        var menuDao = new app.persistence.CompanyMenuDao(connection);

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
