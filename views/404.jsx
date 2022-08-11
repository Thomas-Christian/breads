const React = require('react')
const Default = require('./layouts/Default')

function Error404()  {
    return (
      <Default>
        <h1> Page Not Found! </h1>

        <li>
        <a href="/breads">Go home</a>
        </li>

      </Default>
    )
}

module.exports = Error404
