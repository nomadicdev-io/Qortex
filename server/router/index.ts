import appHealth from "@server/plugins/helth";
import { Elysia } from "elysia";
import uploadRoutes from "./uploads";

const appRouter = new Elysia({
    name: 'app-router',
})
.use(appHealth)
.use(uploadRoutes)

export default appRouter