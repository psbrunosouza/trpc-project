import {publicProcedure, router} from "./trpc";
import {z} from 'zod';

export default router({
    listUsers: publicProcedure.output(
        z.array(
            z.object({
                id: z.number(),
                name: z.string(),
            })
        )
    ).query(() => [
        {
            id: 1,
            name: 'Fabio',
        },
        {
            id: 2,
            name: 'Pedro'
        }
    ])
})
