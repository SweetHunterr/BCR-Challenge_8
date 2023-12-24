const request = require('supertest')
const app = require('../../app')

describe("POST /v1/auth/login", () => {
  it("should response with 201 as status code", async () => {
    const email = "johnny@binar.co.id";
    const password = "123456";
    let data = {
      email: email,
      password: password
    }

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send(data)
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(res.body);
      });
  });

  it("should response with 404 as status code", async () => {
    const email = "johnny@binar";
    const password = "123450";
    let data = {
      email: email,
      password: password
    }

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send(data)
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual(res.body);
      });
  });

  it("should response with 401 as status code", async () => {
    const email = "johnny@binar.co.id";
    const password = "12345";
    let data = {
      email: email,
      password: password
    }

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send(data)
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(res.body);
      });
  });
});
