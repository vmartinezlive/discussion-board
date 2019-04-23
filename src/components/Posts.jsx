import React from 'react';
import PropTypes from 'prop-types';

function Posts(props) {

  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>likes:{props.likes}</p>
      <p>dislikes:{props.dislikes}</p>
    </div>
  );
}

Posts.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequited,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired
};
export default Posts;
