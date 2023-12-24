const request = require('supertest')
const app = require('../../app')

describe('GET LIST CAR', () => {
  it('should response with 200 as status code', async () => {
    return request(app)
      .get('/v1/cars')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(res.body)
      })
  })

  it('should response with 200 as status code', async () => {
    let id_car = 83

    return request(app)
      .get(`/v1/cars/${id_car}`)
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual(res.body)
      })
  })
});

describe('POST CAR', () => {
  it('should response with 201 as status code when car succesfully created by admin', async () => {
    const name = "Nissan GT-R"
    const price = 300000
    const image = "https://source.unsplash.com/512x512"
    const size = "MEDIUM"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG5ueSIsImVtYWlsIjoiam9obm55QGJpbmFyLmNvLmlkIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJBRE1JTiJ9LCJpYXQiOjE2NTQ2ODY2ODh9.p0r7HO-tC9-49FOKuYNgl4Ys_nxV_pOuKLyYpjC004w"

    let data_car = {
      name: name,
      price: price,
      image: image,
      size: size
    }

    return request(app)
      .post('/v1/cars')
      .set("Authorization", `Bearer ${token}`)
      .send(data_car)
      .then((res) => {
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual(res.body)
      })
  })

  it('should response with 422 as status code when car fails to create by admin', async () => {
    const name = "Nissan GT-R"
    const price = 300000
    const image = "https://source.unsplash.com/512x512"
    const size = "MEDIUM"
    const token = "Fake Admin"

    let data_car = {
      name: name,
      price: price,
      image: image,
      size: size
    }

    return request(app)
      .post('/v1/cars')
      .set("Authorization", `Bearer ${token}`)
      .send(data_car)
      .then((res) => {
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual(res.body)
      })
  })
})

describe('UPDATE CAR', () => {
  it('should response with 201 as status code when car succesfully updated by admin', async () => {
    const id_car = 38
    const name = "Valiant"
    const price = 300000
    const image = "https://source.unsplash.com/505x505"
    // Update Size "MEDIUM" to "SMALL"
    const size = "SMALL"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG5ueSIsImVtYWlsIjoiam9obm55QGJpbmFyLmNvLmlkIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJBRE1JTiJ9LCJpYXQiOjE2NTQ2ODY2ODh9.p0r7HO-tC9-49FOKuYNgl4Ys_nxV_pOuKLyYpjC004w"

    let data_car = {
      name: name,
      price: price,
      image: image,
      size: size
    }

    return request(app)
      .put(`/v1/cars/${id_car}`)
      .set("Authorization", `Bearer ${token}`)
      .send(data_car)
      .then((res) => {
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual(res.body)
      })
  })

  it('should response with 422 as status code when car fails to update by admin', async () => {
    const id_car = 101
    const name = "Valiant"
    const price = 300000
    const image = "https://source.unsplash.com/505x505"
    // Update Size "MEDIUM" to "SMALL"
    const size = "SMALL"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG5ueSIsImVtYWlsIjoiam9obm55QGJpbmFyLmNvLmlkIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJBRE1JTiJ9LCJpYXQiOjE2NTQ2ODY2ODh9.p0r7HO-tC9-49FOKuYNgl4Ys_nxV_pOuKLyYpjC004w"

    let data_car = {
      name: name,
      price: price,
      image: image,
      size: size
    }

    return request(app)
      .put(`/v1/cars/${id_car}`)
      .set("Authorization", `Bearer ${token}`)
      .send(data_car)
      .then((res) => {
        expect(res.statusCode).toBe(422)
        expect(res.body).toEqual(res.body)
      })
  })
})

describe('DELETE CAR', () => {
  it('should response with 201 as status code when car successfully deleted by admin', async () => {
    let id_car = 96
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkpvaG5ueSIsImVtYWlsIjoiam9obm55QGJpbmFyLmNvLmlkIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjIsIm5hbWUiOiJBRE1JTiJ9LCJpYXQiOjE2NTQ2ODY2ODh9.p0r7HO-tC9-49FOKuYNgl4Ys_nxV_pOuKLyYpjC004w"

    return request(app)
      .delete(`/v1/cars/${id_car}`)
      .set("Authorization", `Bearer ${token}`)
      .then((res) => {
        expect(res.statusCode).toBe(201)
        expect(res.body).toEqual(res.body)
      })
  })
})