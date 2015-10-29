var React = require('react');
var ReactDOM = require('react-dom');
var Comment = require('./comment.jsx');
var io = require('socket.io-client');

ReactDOM.render(
  <Comment.CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
