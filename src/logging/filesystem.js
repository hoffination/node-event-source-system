const fs = require('fs')

module.exports = class FileSystemLogger {
  constructor(store) {
    this.store = store;
  }

  restoreLogs() {
    fs.readFile('log.txt', (err, data) => {
      if (err) console.log(err);
      let logs = data.toString().split('\n');
      logs.forEach(log => {
        this.store.dispatch(JSON.parse(log))
      })
    })
  }

  saveLog(action) {
    fs.appendFile('log.txt', '\n' + JSON.stringify(action), (err) => {
      if (err) console.log(err);
      console.log('data appended to log');
    })
  }
}
