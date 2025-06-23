const express = require('express');

const app = express();

const userRoutesV1 = require('./routes/v1/userRoutes');
const roleRoutesV1 = require('./routes/v1/roleRoutes');
const authRoutesV1 = require('./routes/v1/authRoutes');

const authenticate = require('./middlewares/authMiddleware')

app.use(express.json());

app.get('/', (req, res) => {
    res.send('CesiZenApi is running ✅');
});

const apiV1Router = express.Router();

apiV1Router.use('/auth', authRoutesV1);

apiV1Router.use('/users', authenticate, userRoutesV1);
apiV1Router.use('/roles', authenticate, roleRoutesV1);

app.use('/cesizen/api/v1', apiV1Router)

module.exports = app;
