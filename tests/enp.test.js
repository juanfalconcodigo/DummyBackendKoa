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

    it('[TESTPOST] should return success create', async() => {
        await request.post('/apitest/testone').send({
            name: 'Juan',
            email: 'juan@gmail.com'
        }).set('Accept', 'application/json').expect(201)
    });

    it('[TESTPOST] should return error create', async() => {
        const response = await request.post('/apitest/testone').send({
            name: 'Juan'
        }).set('Accept', 'application/json').expect('Content-Type', 'application/json; charset=utf-8');
        expect(response.status).toEqual(400);
    });

})