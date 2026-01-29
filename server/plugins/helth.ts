import { Elysia } from "elysia";
import { healthcheckPlugin } from "elysia-healthcheck";

const appHealth = new Elysia({
    name: 'healthcheck-api',
    detail: {
        tags: ['Healthcheck'],
    }
})
.use(
    healthcheckPlugin({
      prefix: '/health',
      paths: {
        liveness: '/liveness',
        readiness: '/readiness',
      },
    })
)

export default appHealth
