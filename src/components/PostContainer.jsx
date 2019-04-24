import React from 'react';
import Posts from './Posts';
import PropTypes from 'prop-types';


function PostContainer(props) {

  return(
    <div>
      <style jsx>{`
        background-color: #FFF9E9;
        margin-top: none;
        h1{
          font-family: 'Schoolbell', cursive;
          font-size: 5rem;
          text-align: center;
        }


      `}</style>
    <h1>Girl Chat</h1>
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
