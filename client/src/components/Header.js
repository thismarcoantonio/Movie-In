import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <div className="app-header">
        <h1 className="app-header__logo">MovieIn</h1>

        <div>
          <a href="#">Login</a> or <a href="#">Sign-up</a> 
        </div>
      </div>
    )
  }
}

export default Header