const express = require("express");
const morgan = require('morgan');

const app = express();

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});