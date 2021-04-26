import React, { useEffect } from 'react';
import { getPosts } from '../../actions/postAction';
import { connect } from 'react-redux';
import Post from './Post';


const Posts = (props) => {

  useEffect(() => {
    props.getPosts();
  })

  const { posts } = props;

  if (posts.length) {
    const map = posts.map((post) => <Post key={post.id} description={post.description} img={post.img} />)

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


const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}
export default connect(mapStateToProps, { getPosts })(Posts);

