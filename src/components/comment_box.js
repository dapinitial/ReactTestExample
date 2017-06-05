import React, { Component } from 'react';

export default class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <textarea placeholder="Comment here."></textarea>
        <button type="submit">Submit Comment</button>
      </div>
    );
  }
}
