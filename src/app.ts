import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { config } from './config';
import { catalogueRoutes } from './routes/catalogueRoutes';
import { drugRoutes } from './routes/drugRoutes';
import { employeeRoutes } from './routes/employeeRoutes';
import { packageRoutes } from './routes/packageRoutes';
import { priceRoutes } from './routes/priceRoutes';
import { productRoutes } from './routes/productRoutes';
import { stateRoutes } from './routes/stateRoutes';
import { supplierRoutes } from './routes/supplierRoutes';

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
app.use('/states', stateRoutes);
app.use('/prices', priceRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/catalogues', catalogueRoutes);
app.use('/employees', employeeRoutes);

export default app;
