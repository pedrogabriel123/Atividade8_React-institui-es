const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware para POST definir 'id' = 'NO_ENTIDADE' automaticamente
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST' && req.path === '/ies') {
        req.body.id = req.body.NO_ENTIDADE + "_" + new Date().getTime(); // Garante IDs únicos
    }
    next();
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server rodando na porta 3000');
});
