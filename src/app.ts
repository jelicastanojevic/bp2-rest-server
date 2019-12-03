import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { config } from './config';
import { drugRoutes } from './routes/drugRoutes';
import { packageRoutes } from './routes/packageRoutes';
import { productRoutes } from './routes/productRoutes';

// Controllers (route handlers)
// API keys and Passport configuration
// Create Express server
const app: express.Application = express();

// Express configuration
app.set('port', config.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.options('*', cors());
app.use(cors());

// Routes
app.use('/products', productRoutes);
app.use('/drugs', drugRoutes);
app.use('/packages', packageRoutes);

export default app;
