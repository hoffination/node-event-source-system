import React = require('react')
import { renderToString } from 'react-dom/server'

import App from './App'

const renderApp = (state: any) => {
  const html = renderToString(React.createFactory(App)({ state, name: 'FRED' }))
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Server rendered media list</title>
      <link rel="preconnect" href="https://images-na.ssl-images-amazon.com">
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css"/>
      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
      <style>body {font-family:"Varela Round",sans-serif;}.media-size { height: 10rem; width: 10rem; }</style>
    </head>
    <body>${html}</body>
    </html>
  `
}

export { renderApp }