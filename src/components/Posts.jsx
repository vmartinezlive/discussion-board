import React from 'react';
import PropTypes from 'prop-types';

function Posts(props) {

  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p><button onClick={()=>props.onUpvote(props.id)}>Upvote</button>{props.likes}<button onClick={()=>props.onDownvote(props.id)}>Downvote</button></p>


    </div>
  );
}

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDownvote: PropTypes.func,
  onUpvote: PropTypes.func
};
export default Posts;
