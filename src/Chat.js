import React from 'react'
import {connect} from 'react-redux'
import Messages from './Messages'
import changeData from './actionCreators/changeData'
import updateData from './actionCreators/updateData'
import storageData from './actionCreators/storageData'
import changeMesseg from './actionCreators/changeMesseg'
import changeLoginStatus from './actionCreators/changeLoginStatus'
import resetMessage from './actionCreators/resetMessage'
import './Chat.css'

const key = 'state'
const Millisecond_In_One_Second = 1000
const sampleMessages = [
  {name: 'Ahmad', message: 'Hy'},
  {name: 'Ahmad', message: 'how are you'},
  {name: 'Ahmad', message: 'Whats about you'},
  {name: 'Ahmad', message: 'whare are you now !'},
  {name: 'Ahmad', message: 'Are you comming'},
  {name: 'Ahmad', message: 'Good'},
]

class MyApp extends React.Component {
  constructor(props) {
    super(props)

    this.submit = this.submit.bind(this)
    this.logedOut = this.logedOut.bind(this)
  }

  componentWillMount() {
    if (localStorage.getItem(key)) {
      this.props.handleStorage(JSON.parse(localStorage.getItem(key)))
      this.props.handleLogin(true)
    }
  }

  componentDidMount() {
    const {handleUpdate} = this.props
    if (!localStorage.getItem(key)) {
      const timer = setInterval(() => {
        handleUpdate(sampleMessages.shift())
        if (sampleMessages.length === 0) {
          clearInterval(timer)
        }
      }, 15 * Millisecond_In_One_Second)
    }
  }

  componentDidUpdate() {
    localStorage.setItem(key, JSON.stringify([...this.props.data]))
  }

  submit(event) {
    if (event.key === 'Enter') {
      this.props.handleData(this.props.messages)
      this.props.handleReset()
    }
  }

  logedOut() {
    localStorage.clear()
    this.props.history.push('./login')
  }
  render() {
    return (
      <div>
        <div className="heading">
          <h3 data-testid="chat-title">Welcome to My Chat App</h3>
          <div className="log-out">
            <input
              type="button"
              className="logOut-btn"
              value="logout"
              onClick={this.logedOut}
            />
          </div>
        </div>
        <Messages datas={this.props.data} />
        <input
          className="message-field"
          type="text"
          value={this.props.messages}
          onKeyPress={this.submit}
          onChange={this.props.handleMessege}
          placeholder="Type your messege and hit ENTER"
        />
      </div>
    )
  }
}

const mapStateToProps = ({counter, data, login, messages}) => ({
  counter,
  data,
  login,
  messages,
})

const mapDispatchToProps = dispatch => ({
  handleData(dataa) {
    dispatch(changeData(dataa))
  },
  handleMessege(event) {
    dispatch(changeMesseg(event.target.value))
  },
  handleUpdate(messeges) {
    dispatch(updateData(messeges))
  },
  handleStorage(data) {
    dispatch(storageData(data))
  },
  handleLogin(login) {
    dispatch(changeLoginStatus(login))
  },
  handleReset() {
    dispatch(resetMessage(''))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyApp)
