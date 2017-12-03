import { readFile, appendFile } from 'fs'
import { Store } from 'redux'
import AppAction from '../core/interfaces/appAction';

export default class FileSystemLogger {
  constructor(private store: Store<any>) {}

  restoreLogs() {
    readFile('log.txt', (err, data) => {
      if (err) console.log(err);
      let logs = data.toString().split('\n');
      logs.forEach(log => {
        this.store.dispatch(JSON.parse(log))
      })
    })
  }

  saveLog(action: AppAction) {
    appendFile('log.txt', '\n' + JSON.stringify(action), (err) => {
      if (err) console.log(err);
      console.log('data appended to log');
    })
  }
}
