import Boom from '@hapi/boom';
import route from './route';

const mountRoutes = (app) => {
    app.use('/api/v1', route);
    app.get('*', (req, res, next) => next(Boom.notFound('Route does not exist')));
};

export default mountRoutes;