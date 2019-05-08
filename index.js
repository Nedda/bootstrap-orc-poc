var express = require('express');
var app = express();
var chalk = require('chalk');
const port = 3000;

app.use('/', express.static('src'))

app.listen(port, () => console.log(chalk.blue('Running on port 3000')));

