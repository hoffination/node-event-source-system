import * as express from 'express'
import { createStore } from 'redux'
import FileSystemLogger from './logging/filesystem'

import RootRoute from './root'
import { reducer } from './core/reducers/meta.reducer'

const app = express()
const store = createStore(reducer)
const logger = new FileSystemLogger(store)

logger.restoreLogs()

// regester endpoints
app.use(new RootRoute(store, logger).getRouter())

export default app
