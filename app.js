const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use((req, res) => {
    res.json({ notFound: '404 - Not found' });
});

module.exports = app;
