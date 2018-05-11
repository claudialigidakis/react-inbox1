import React from 'react'
import Messages from './Messages.js'

export default ({ messageData }) => {
  return (
  <ul>
    {
      messageData.map(( messages, id) =>
      <Messages key={messages.id} props={messages}/>
      )
    }
  </ul>
)
}
