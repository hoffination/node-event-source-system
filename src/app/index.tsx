import React = require('react')
import { renderToString } from 'react-dom/server'

import App from './App'

const renderApp = (state: any) => {
  const html = renderToString(React.createFactory(App)({state, name: 'FRED'}))
  return `
    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>${html}</body>
    </html>
  `
}

export { renderApp }