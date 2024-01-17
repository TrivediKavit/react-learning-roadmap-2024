import React from 'react'

export default function HeaderWithoutJSX() {
    return React.createElement('div', {className: 'container'}, 
        React.createElement('h1', null, 'This is weird!')
    )
}

/**
 * Example Usage in index.js
 * 
 * 
 * import ReactDOM from 'react-dom'
 * const element = React.createElement(HeaderWithoutJSX, null)
 * ReactDOM.render(element, document.getElementById('root))
 */