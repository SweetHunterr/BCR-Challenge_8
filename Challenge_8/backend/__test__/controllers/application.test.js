const request = require('supertest')
const app = require('../../app')

describe('Handle Get Root', () => {
  it('should response with 200 as status code', async () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(res.body)
      })
  });

  it('should response with 404 as status code', async () => {
    return request(app)
      .get("/qwerty")
      .then((res) => {
        expect(res.statusCode).toBe(404)
        expect(res.body).toEqual(res.body)
      })
  })
});