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
          key={post.id}/>
      )}
    </div>

  );
}

PostContainer.propTypes = {
  childListOfPosts: PropTypes.array
};

export default PostContainer;
