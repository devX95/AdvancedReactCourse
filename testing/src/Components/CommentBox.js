import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions";
import requireAuth from "Components/requireAuth";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = e => {
    const comment = e.target.value;
    this.setState(() => ({ comment }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState(() => ({ comment: "" }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <div>
          <button className="fetch-comments" onClick={this.props.fetchComments}>
            Fetch Comments
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  saveComment,
  fetchComments
})(requireAuth(CommentBox));
