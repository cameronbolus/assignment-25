import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

const ChirpView = React.createClass({
getInitialState: function(){
	return{
		messagesArray: []
	}
},

_renderMessages: function(array){
	array.reverse();
	return array.map(function(messageItem, i){
		return <NewMessages newSentMessage={messageItem} indexofSingleMessage={i}/>
	})
},

_handleNewMessage: function(){
	console.log('firing!', this.refs.messageInput.value)
	if(this.refs.messageInput.value.length > 170){
		alert('Message must be 170 characters or less')
	}else{
	let newState = this.state
	let newMessage = {
		message: this.refs.messageInput.value
	}
	newState.messagesArray.push(newMessage)
	this.setState(newState)
	this.refs.messageInput.value = ''
}
},

render: function(){
  return (
    <div className="chirp-view">
			<nav><p>Chirp!</p><div>Login</div><div>Sign Up</div></nav>
      <div className="enter-chirp">
				<textarea ref="messageInput" className="message-input" type="text" placeholder="Type your message here (170 characters or less)"></textarea>
				<button className="chirp-button" onClick={this._handleNewMessage} type="button" name="button">Chirp!</button>
				<img className="chirp-img" src="https://camo.githubusercontent.com/1c8f35698f41f6df2b16bf2e82f68d1fa9dac448/68747470733a2f2f7469792d6c6561726e2d636f6e74656e742e73332e616d617a6f6e6177732e636f6d2f34323666373437352d63686972702d6c6f676f2e706e67" alt=""/>
      </div>
			<div className="all-chirp-messages">
				<p className="center">New Messages</p>
				{this._renderMessages(this.state.messagesArray)}
			</div>
    </div>
  )
}
})

let NewMessages = React.createClass({
	render: function(){
		let message = this.props.newSentMessage.message
		console.log(message, "each props for messages")
		return (
			<div>
				<div className="new-message">{message}</div>
			</div>
		)
	}
})

ReactDOM.render(<ChirpView/>, document.querySelector('#app-container') )
