import * as express from 'express'

export default class TestRoute {
  private route: express.Router
  private requests: number

  constructor() {
    this.route = express.Router()
    this.requests = 0

    this.route.get('/test', (req, res) => {
      res.send(`Requests:${JSON.stringify(this.requests)}`)
      this.requests++
    })
  }

  getRouter(): express.Router {
    return this.route
  }
}
