// sqlite3 database.sqlite
// DELETE FROM offers;
// DELETE FROM tenders;

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/tenderRoutes');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/abstract_public_dir', express.static(path.join(__dirname, 'public')));
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));