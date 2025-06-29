const express = require('express');
const helmet = require("helmet");
const cors = require('cors');

const setupSwagger = require('./config/swagger');

const app = express();

const userRoutesV1 = require('./routes/v1/userRoutes');
const roleRoutesV1 = require('./routes/v1/roleRoutes');
const authRoutesV1 = require('./routes/v1/authRoutes');
const questionnaireRoutesV1 = require('./routes/v1/questionnaireRoutes');
const pageRoutesV1 = require('./routes/v1/pageRoutes');
const eventRoutesV1 = require('./routes/v1/eventRoutes');
const userResponseRoutesV1 = require('./routes/v1/userResponseRoutes');
const contentBlockRoutesV1 = require('./routes/v1/contentBlockRoutes');
const menuItemRoutesV1 = require('./routes/v1/menuItemRoutes');
const stressFeedbackRangeRoutesV1 = require('./routes/v1/stressFeedbackRangeRoutes');

const authenticate = require('./middlewares/authMiddleware')

app.use(helmet());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

setupSwagger(app);

app.get('/', (req, res) => {
    res.send('CesiZenApi is running ✅');
});

const apiV1Router = express.Router();

apiV1Router.use('/auth', authRoutesV1);

apiV1Router.use('/users', authenticate, userRoutesV1);
apiV1Router.use('/roles', authenticate, roleRoutesV1);
apiV1Router.use('/questionnaires', authenticate, questionnaireRoutesV1);
apiV1Router.use('/pages', authenticate, pageRoutesV1);
apiV1Router.use('/events', authenticate, eventRoutesV1);
apiV1Router.use('/user-responses', authenticate, userResponseRoutesV1);
apiV1Router.use('/content-blocks', authenticate, contentBlockRoutesV1);
apiV1Router.use('/menu-items', authenticate, menuItemRoutesV1);
apiV1Router.use('/stress-feedback-ranges', authenticate, stressFeedbackRangeRoutesV1);

app.use('/cesizen/api/v1', apiV1Router);

module.exports = app;
