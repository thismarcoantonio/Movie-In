import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class AuthPage extends React.Component {
  constructor() {
    super()

    this.state = { login: true }
    this.changeFormType = this.changeFormType.bind(this)
  }

  changeFormType (e) {
    e.preventDefault();
    this.setState({ login: !this.state.login })
  }

  handleAuth (e) {
    
  }

  render () {
    return (
      <div className="app-auth">
        <div className="container">
          <h1 className="brand_title text-light">Movie<b>In</b></h1>

          <form onSubmit={this.handleAuth} className="app-auth__form">
            <input type="text" placeholder="Email" className="app-auth__form-email"/>
            {!this.state.login && <input type="text" placeholder="Username" className="auth_form-username" />}
            <input type="password" className="app-auth__form-password" placeholder="Password"/>
            <button type="submit" className="app-auth__form-submit">
              {this.state.login ? 'Login' : 'Sign-up'}
            </button>
          </form>

          <span className="text-light">
            {this.state.login ? `Don't have` : 'Already have'} an account {this.state.login && 'yet'}?
            <a style={{marginLeft: '5px', color: "#FFF"}} href="#" onClick={this.changeFormType}>{this.state.login ? 'Register now' : 'Login Now'}</a>
          </span>
        </div>
      </div>
    )
  }
}

export default AuthPage