import { rest } from 'msw'

export const handlers = [
    rest.get('/api/users', (req, res, ctx) => {

        return res(
            ctx.status(200),
            ctx.json([
                {id: 1, name: 'user 1'},
                {id: 2, name: 'user 2'}
            ]),
        )
    }),
]