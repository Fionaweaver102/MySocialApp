import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from './Post';


class Posts extends Component {
  // async getPosts() {

  //   let jwt = localStorage.getItem("jwt_token");

  //   let response = await fetch(`http://localhost:3001/posts`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
  //     }
  //   })

  //   this.state.posts = await response.json();
  // }

  render() {
    const { posts } = this.props;
    if (posts.length) {
      const map = posts.map((post) => <Post key={post.id} description={post.description} img={post.img} tags={post.tags} />)

      return (
        < div >
          {map}
        </div>
      )
    }

    return (
      <h4>Loading...</h4>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Posts);

