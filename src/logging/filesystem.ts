import { readFile, appendFile, watchFile, writeFile } from 'fs'
import { Store } from 'redux'
import AppAction from '../core/interfaces/appAction'

const LOG_FILE = 'log.txt'
const LAST_FILE = 'last.txt'

export default class FileSystemLogger {
  constructor(private store: Store<any>) {}

  restoreLogs() {
    readFile(LOG_FILE, (err, data) => {
      if (err) return console.log(err)
      let logs = data.toString().split('\n')
      logs.forEach(log => {
        this.store.dispatch(JSON.parse(log))
      })
    })
    this.watchLog()
  }

  saveLog(action: AppAction) {
    this.saveLast(action, () => {
      appendFile(LOG_FILE, '\n' + JSON.stringify(action), (err) => {
        if (err) return console.log(err)
        console.log('data appended to log')
      })
    })
  }

  private saveLast(action: AppAction, cb: Function) {
    writeFile(LAST_FILE, JSON.stringify(action), (err) => {
      if (err) return console.log(err)
      cb()
    })
  }

  private watchLog() {
    watchFile(LOG_FILE, (curr, prev) => {
      readFile(LAST_FILE, (err, data) => {
        if (err) return console.log(err);
        this.store.dispatch(JSON.parse(data.toString()))
      })
      console.log('file changed')
    })
  }
}
