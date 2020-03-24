import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import CommentList from "Components/CommentList";
import CommentBox from "Components/CommentBox";
import { connect } from "react-redux";
import { changeAuth } from "actions";

class App extends Component {
  renderButton() {
    if (this.props.isSignedIn) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" component={CommentList} exact />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth
});

export default connect(mapStateToProps, {
  changeAuth
})(App);
