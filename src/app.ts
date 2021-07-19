import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { config } from './config';
import { catalogueItemRoutes } from './routes/catalogueItemRoutes';
import { catalogueRoutes } from './routes/catalogueRoutes';
import { drugRoutes } from './routes/drugRoutes';
import { employeeRoutes } from './routes/employeeRoutes';
import { itemProductRoutes } from './routes/itemProductRoutes';
import { packageRoutes } from './routes/packageRoutes';
import { priceRoutes } from './routes/priceRoutes';
import { productRoutes } from './routes/productRoutes';
import { stateRoutes } from './routes/stateRoutes';
import { supplierRoutes } from './routes/supplierRoutes';

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
app.use('/catalogue-items', catalogueItemRoutes);
app.use('/employees', employeeRoutes);
app.use('/item-products', itemProductRoutes);

export default app;
