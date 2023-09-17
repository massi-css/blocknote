import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1> Note List ({props.length})</h1>
    </header>
  )
}

export default Header