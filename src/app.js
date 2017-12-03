const express = require('express')
const app = express()
const createStore = require('redux').createStore
const FileSystemLogger = require('./logging/filesystem');
 
// routes
const RootRoute = require('./root')

// store
const baseReducer = require('./core/reducers/meta.reducer');
const store = createStore(baseReducer);

const logger = new FileSystemLogger(store);
logger.restoreLogs();

// regester endpoints
app.use(new RootRoute(store, logger).getRouter());

module.exports = app;
