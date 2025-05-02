const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello from App Engine!' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

