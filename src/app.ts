import * as express from 'express'
import { createStore } from 'redux'
import FileSystemLogger from './logging/filesystem'
import * as bodyParser from 'body-parser';

import RootRoute from './root'
import { reducer } from './core/reducers/meta.reducer'
import TestRoute from './test';

const app = express()
const store = createStore(reducer)
const logger = new FileSystemLogger(store)

logger.restoreLogs()

// Support JSON encoded bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('json spaces', 2)

// register endpoints
app.use(new RootRoute(store, logger).getRouter())
app.use(new TestRoute().getRouter())

export default app
