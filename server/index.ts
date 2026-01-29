import { Elysia } from 'elysia';
import { BunAdapter } from 'elysia/adapter/bun'
import appStaticPlugin from './plugins/static';
import openApiPlugin from './plugins/openAPI';
import appHealth from './plugins/helth';

const app = new Elysia({
    name: 'qortex-server',
    adapter: BunAdapter as any,
    systemRouter: true,
    serve: {
        id: process.env.APP_ID as string,
    }
})
.use(appStaticPlugin)
.use(openApiPlugin)
.use(appHealth)
.listen(
    {
        port: process.env.PORT as any,
    },
    () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    }
)

export default app