import * as express from 'express'
import { createStore } from 'redux'
import FileSystemLogger from './logging/filesystem'
import bodyParser = require('body-parser');

import RootRoute from './root'
import { reducer } from './core/reducers/meta.reducer'

const app = express()
const store = createStore(reducer)
const logger = new FileSystemLogger(store)

logger.restoreLogs()

// Support JSON encoded bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('json spaces', 2)

// regester endpoints
app.use(new RootRoute(store, logger).getRouter())

export default app
