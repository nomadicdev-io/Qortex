import { Elysia, file } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const appStaticPlugin = new Elysia({
    name: 'static-plugin',
})
.get('/logo', file('public/logo-dark.svg'))
.get('/favicon.png', file('public/favicon.png'))
.use(staticPlugin({
  prefix: '/public',
  assets: 'public',
  indexHTML: false,
  alwaysStatic: true
})) 
.use(await staticPlugin({
  prefix: '/',
  assets: 'src',
  alwaysStatic: true
})) 

export default appStaticPlugin