import React from 'react'

class Header extends React.Component {
  render () {
    const isVisible = new RegExp(/^()$/).test(this.props.location.pathname)
    
    return (
      <React.Fragment>
        {isVisible && (
          <div className="header">
            <h1 className="header_logo">MovieIn</h1>

            <div>
              <a href="#">Login</a> or <a href="#">Sign-up</a> 
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Header