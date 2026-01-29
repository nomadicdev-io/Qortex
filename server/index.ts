import { Elysia } from 'elysia';
import { BunAdapter } from 'elysia/adapter/bun'
import appStaticPlugin from './plugins/static';
import openApiPlugin from './plugins/openAPI';
import appRouter from './router';
import { appBearer, appIP, appJWT, appLogger, appRateLimit, appServerTiming } from './plugins/global';
import { redis, sqlite } from './db';
import defaultErrorHandler from './lib/defaultErrorHandler';
import ora from 'ora';
import logger from './lib/logger';

// Application DB Handler
const dbInitSpinner = ora('Initializing Databases...\n').start();
const dbHandler = ()=> ({redis, sqlite})
dbInitSpinner.succeed('Databases initialized successfully');

// Application Instance
const appInitSpinner = ora('Initializing Application...\n').start();
const app = new Elysia({
    name: 'qortex-server',
    adapter: BunAdapter as any,
    systemRouter: true,
    serve: {
        id: process.env.APP_ID as string,
    }
})
.onError(defaultErrorHandler as any)
.use(appIP)
.use(appLogger)
.use(appJWT)
.use(appRateLimit)
.use(appBearer)
.use(appServerTiming)
.use(appStaticPlugin)
.derive(dbHandler as any)
.group('/api', app=> app.use(appRouter))
.use(openApiPlugin)
.listen(
    {
        port: process.env.PORT as any,
    },
    () => {
        appInitSpinner.succeed('Application initialized successfully');
        logger.startup()
    }
)

export default app