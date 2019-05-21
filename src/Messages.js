import React, {Component} from 'react'

const styles = {
  overflow: 'auto',
  height: '450px',
}

export default class Messages extends Component {
  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView()
  }

  render() {
    const {datas} = this.props

    return (
      <article className="Message">
        <div style={styles} className="Message--main">
          <ul className="Uol">
            {datas.map((item, index) => (
              <li key={index}>
                <h4 className="Message--user">{item.name}</h4>
                <p className="Message--content">{item.message}</p>
              </li>
            ))}
          </ul>
          <div
            ref={el => {
              this.messagesEnd = el
            }}
          />
        </div>
      </article>
    )
  }
}
