import React from 'react'

const Hello = () => {
  return React.createElement('div', {id: 'hello', className: 'notclass'}, React.createElement('h1', null, 'hello niggas'))
}

export default Hello