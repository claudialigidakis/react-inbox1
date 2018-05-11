import React from 'react'

export default (props) =>{
  const {messages, read, starred, labels} = props
  // console.log(props)
  return (
    <div className="row message unread">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="">
      this
    </a>
  </div>
</div>
  )
}
