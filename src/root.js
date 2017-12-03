const express = require('express')
const baseReducer = require('./core/reducers/meta.reducer')

module.exports = class RootRoute {

  constructor(store, logger) {
    this.route = express.Router();
    this.route.get('/', (req, res) => {
      let action = {type: '/'};
      // run the reducer against the api action to test it
      let storePreview = baseReducer(store.getState(), action)
      res.send(`Hello World!\n${JSON.stringify(storePreview)}`)
      
      store.dispatch(action)
      logger.saveLog(action)
    });
  }

  getRouter() {
    return this.route;
  }
}
