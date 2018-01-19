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
      <div className="auth">
        <div className="container">
          <h1 className="brand_title text-light">Movie<b>In</b></h1>

          <form onSubmit={this.handleLogin} className="auth_form">
            <input type="text" placeholder="Email" className="auth_form-email"/>
            {!this.state.login && <input type="text" placeholder="Username" className="auth_form-username" />}
            <input type="password" className="auth_form-password" placeholder="Password"/>
            <button type="submit" className="auth_form-submit">
              {this.state.login ? 'Login' : 'Sign-up'}
            </button>
          </form>

          <a onClick={this.changeFormType}>
            {this.state.login ? 
              (
              <div className="text-light">
                Don't have an account yet? <span className="underline">Register Now</span>.
              </div>
              ) : (
              <div className="text-light">
                Already have an account? <span className="underline">Login Now</span>.
              </div>
              )
            }
          </a>
        </div>
      </div>
    )
  }
}

export default AuthPage