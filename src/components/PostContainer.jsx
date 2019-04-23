import React from 'react';
import Posts from './Posts';
import PropTypes from 'prop-types';


function PostContainer(props) {

  return(
    <div>
      <h1>Post One</h1>
      {props.childListOfPosts.map((post) =>
        <Posts title={post.title}
          text={post.text}
          likes={post.likes}
          id={post.id}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}
          key={post.id}/>
      )}
    </div>

  );
}

PostContainer.propTypes = {
  childListOfPosts: PropTypes.array,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
};

export default PostContainer;
