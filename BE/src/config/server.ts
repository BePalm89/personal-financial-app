import express, { Application, NextFunction} from 'express';
import cors from 'cors';
import { errorHandler } from '../middleware/errors';
import usersRoutes from '../api/routes/User.routes';

const server: Application = express();
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true}));

server.use('/api/v1/users', usersRoutes);

server.use('*', (next: NextFunction) => {
    const error = new Error('Route not found') as Error & { status?: number};
    error.status = 404;
    next(error);
})

server.use(errorHandler);

export default server;
