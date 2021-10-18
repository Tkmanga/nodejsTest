const app = require('../src/app')
const request = require('supertest')
describe('GET /task',()=>{
  test('should respond with a 200 status code', async ()=>{
    const response = await request(app).get('/task').send()
    expect(response.statusCode).toBe(200)
  })
  test('should respond with an array', async ()=>{
    const response = await request(app).get('/task').send() 
    expect(response.body).toBeInstanceOf(Array)
  })
})

describe('POST /task', ()=>{
  //should respond with a 200 status code
  test('should respond with a 200 status code', async ()=>{
    const response = await request(app).get('/task').send()
    expect(response.statusCode).toBe(200)
  })
  //should respond with a content-type of application/json 
  test('should have a content-type: application/json in header',async ()=>{
    const response = await request(app).get('/task').send() 
    expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  })
  //should respond with a json object containing the new task with an id 
  //should respond with a json object containing the new task with a title 
})