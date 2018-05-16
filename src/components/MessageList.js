import React from 'react'
import Messages from './Messages.js'


const MessageList = ({messages, ...methods}) => {
  return messages.map(message => <Messages {...message} key={message.id} {...methods} />);
}

export default MessageList
