/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('destinations')

describe('Destination routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('/api/destinations/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return Destinations.create({
        email: codysEmail
      })
    })

    it('GET /api/destinations', async () => {
      const res = await request(app)
        .get('/api/destinations')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
  }) // end describe('/api/destinations')
}) // end describe('Destination routes')