import './Login.css'
import {connect} from 'react-redux'
import {
  firstName,
  lastName,
  email,
  password,
  onSubmit,
} from './actionCreators/signUp'
import React, {Component} from 'react'

class SignUp extends Component {
  constructor(props) {
    super(props)
  }
  handleSignUpPassword = event => {
    const {dispatch} = this.props
    dispatch(password(event.target.value))
  }
  handleEmail = event => {
    const {dispatch} = this.props

    dispatch(email(event.target.value))
  }
  handleFirstName = event => {
    const {dispatch} = this.props
    dispatch(firstName(event.target.value))
  }
  handleLastName = event => {
    const {dispatch} = this.props
    dispatch(lastName(event.target.value))
  }
  handleSubmit = event => {
    event.preventDefault()
    const {firstName, lastName, email, password, dispatch} = this.props
    if (firstName && lastName && email && password) {
      dispatch(
        onSubmit({
          firstName,
          lastName,
          email,
          password,
        }),
      )
      alert('signUp successfully')
      this.props.history.push('/login')
    }
    alert('please fill out all the fields')
  }
  render() {
    const {firstName, lastName, email, password} = this.props
    return (
      <div className="form-box">
        <div className="head" name="signUpForm">
          SignUp Form
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="label-control" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="User Name"
              value={firstName}
              onChange={this.handleFirstName}
            />
          </div>
          <div className="form-group">
            <label className="label-control" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="User Name"
              value={lastName}
              onChange={this.handleLastName}
            />
          </div>
          <div className="form-group">
            <label className="label-control" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="User Name"
              value={email}
              onChange={this.handleEmail}
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
              onChange={this.handleSignUpPassword}
            />
          </div>
          <input type="submit" name="Submit" value="Submit" className="btn" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({signUp}) => ({
  firstName: signUp.firstName,
  lastName: signUp.lastName,
  password: signUp.password,
  email: signUp.email,
})

export default connect(
  mapStateToProps,
  null,
)(SignUp)
