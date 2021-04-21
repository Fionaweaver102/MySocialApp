import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';



class Posts extends Component {

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
    posts: state.posts,
  }
}
export default connect(mapStateToProps)(Posts);

