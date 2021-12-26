const request = require('supertest')
const app = require('../app')
const Mongoose = require('mongoose')

beforeAll(()=>{
    jest.setTimeout(20000)
})

  describe('Happy-path',()=>{
    test('Welcome Route -> GET /',async()=>{
        await request(app).get('/').expect(200)
    })

    test('Get All Records Route /records',async()=>{
        request(app).get('/records').expect(200)
    })

    test('Get Specific Records with proper model',async()=>{
        request(app).post('/records').send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-03",
            "minCount": 2700,
            "maxCount": 3000
            }).expect(200)
    })
  })

  describe('Alternatives',()=>{
   
    test('Throw 400 when -> Get Specific Records with wrong model',async()=>{
        request(app).post('/records').send({
            "endDate": "2018-02-03",
            "minCount": 2700,
            "maxCount": 3000
            }).expect(400)
    })

    test('Throw 404 when -> No such endpoint',async()=>{
        request(app).get('/nosuchep').expect(404)
    })
   
  })
