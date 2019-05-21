/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import changeUserName from './actionCreators/changeUserName'
import changeUserPassword from './actionCreators/changeUserPassword'
import changeLoginStatus from './actionCreators/changeLoginStatus'
import './Login.css'

class Login extends Component {
  componentWillMount() {
    if (localStorage.getItem('state')) {
      this.props.handleLogin(true)
    }
  }
  componentDidMount() {
    if (!localStorage.getItem('state')) {
      this.props.handleLogin(false)
    }
  }

  login = event => {
    event.preventDefault()
    const checked = this.props.users.filter(
      user =>
        user.email === this.props.name && user.password === this.props.password,
    )
    if (checked.length) {
      this.props.handleLogin(true)
      this.props.history.push('./chat')
    } else {
      alert('incorrect UserName and password')
    }
  }
  render() {
    const {name, password, handlePassword, handleName} = this.props
    return (
      <div className="form-box">
        <div className="head" name="loginForm">
          Login Form
        </div>
        <form onSubmit={this.login}>
          <div className="form-group">
            <label className="label-control" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="User Name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="form-group">
            <label className="label-control" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <button type="submit" name="Submit" value="Submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({login, name, password, signUp}) => ({
  login,
  name,
  password,
  users: signUp.users,
})

const mapDispatchToProps = dispatch => ({
  handlePassword(event) {
    dispatch(changeUserPassword(event.target.value))
  },
  handleName(event) {
    dispatch(changeUserName(event.target.value))
  },
  handleLogin(input) {
    dispatch(changeLoginStatus(input))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
