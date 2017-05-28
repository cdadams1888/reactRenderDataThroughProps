import path from 'path';
import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello Express and EJS!'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});


