import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import App from 'Components/App'

const jsx = (
  <Root>
    <App/>
  </Root>
)

ReactDOM.render(jsx, document.querySelector('#root'))