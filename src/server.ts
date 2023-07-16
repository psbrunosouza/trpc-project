import * as trpc from '@trpc/server/adapters/express';
import express from 'express';
import router from "./router";
import {expressHandler} from "trpc-playground/handlers/express";

const runApp = async () => {
    const app = express();

    app.use(express.json());

    app.use(
        '/trpc',
        trpc.createExpressMiddleware({
            router
        })
    );

    app.use(
        '/playground',
        await expressHandler({
            trpcApiEndpoint: '/trpc',
            playgroundEndpoint: '/playground',
            router
        })
    )

    app.listen(3000, () => {
        console.log("server is running")
    });
}

runApp();