import * as express from 'express'
import { Store } from 'redux'
import Joi = require('joi');

import FileSystemLogger from './logging/filesystem'
import { reducer, ADD_MEDIA_ACTION } from './core/reducers/meta.reducer'
import AppAction from './core/interfaces/appAction'
import { renderApp } from './app/index'

export default class RootRoute {
  private route: express.Router

  private postMediaJoi = Joi.object().keys({
    author: Joi.string().required(),
    coverUrl: Joi.string(),
    title: Joi.string().required(),
    type: Joi.string().alphanum().required(),
    timeFinished: Joi.number()
  })

  constructor(store: Store<any>, logger: FileSystemLogger) {
    this.route = express.Router()

    this.route.get('/', (req, res) => {
      let action: AppAction = {type: '/'}
      // run the reducer against the api action to test it
      let storePreview = reducer(store.getState(), action)
      res.send(`Hello World!\n${JSON.stringify(storePreview)}`)

      logger.saveLog(action)
    })

    this.route.get('/home', (req, res) => {
      return res.send(renderApp(store.getState()))
    })

    this.route.post('/media', (req, res) => {
      Joi.validate(req.body, this.postMediaJoi, (err, value) => {
        if (err) return res.status(400).send(err)
        let action: AppAction = {
          type: ADD_MEDIA_ACTION,
          payload: {...value, timeFinished: value.timeFinished || Date.now()}
        }
        logger.saveLog(action)
        return res.status(200).send(`Good job finishing ${value.title}! On to the next one...`)
      })
    })
  }

  getRouter(): express.Router {
    return this.route
  }
}
