import * as express from 'express'
import { Store } from "redux"

import FileSystemLogger from "./logging/filesystem"
import { reducer } from './core/reducers/meta.reducer'
import AppAction from './core/interfaces/appAction'

export default class RootRoute {
  private route: express.Router

  constructor(store: Store<any>, logger: FileSystemLogger) {
    this.route = express.Router()

    this.route.get('/', (req, res) => {
      let action: AppAction = {type: '/'}
      // run the reducer against the api action to test it
      let storePreview = reducer(store.getState(), action)
      res.send(`Hello World!\n${JSON.stringify(storePreview)}`)
      
      // store.dispatch(action)
      logger.saveLog(action)
    })
  }

  getRouter(): express.Router {
    return this.route
  }
}
