import qs from 'qs'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { defaultState } from './src/defaults';
import App from './src/App'

const app = Express()
const port = 3000

//Serve static files
app.use('/static', Express.static('dist'))

// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender(req, res) {
  // Read the counter from the request, if provided
  const params = qs.parse(req.query)

  const initialState = { ...defaultState, ...params };

  setTimeout(() => {
    store.dispatch({type: 'REINIT_STATE_WITH_PAYLOAD', payload: initialState});
    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Grab the initial state from our Redux store
    const finalState = store.getState()

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState))
  }, 5000)
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="app-root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}
        </script>
        <script src="/static/main.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
