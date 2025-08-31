const express = require('express');
const helmet = require("helmet");
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('CesiZenApi is running ✅');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

module.exports = app;
