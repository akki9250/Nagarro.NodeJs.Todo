const express = require('express');
const app = express();
const {db, Todos, notes} = require('./db');

app.use(express.json());

app.use('/', express.static(__dirname + '/public'));

app.set( 'port', ( process.env.PORT || 5000 ));

db.sync().then(
    () => app.listen(app.get( 'port' ))
    ).catch(
      (err) => console.error(err)
    );

    