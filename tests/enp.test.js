const supertest = require('supertest')
const app = require('../server')

describe('Test Endpoints ENP', () => {
    let request = supertest(app.callback())
    it('should return list orders', async() => {
        const res = await request.get('/apitest/order')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('data')
        expect(res.body.data).toHaveLength(3)
    })
})