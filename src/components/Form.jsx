import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function Form(props){
  let _postTitle = null;
  let _postText = null;

  function handleFormSubmission(e) {
    e.preventDefault();
    console.log(_postTitle.value);
    console.log(_postText.value);
    props.onAddNewPost({title: _postTitle.value, text: _postText.value, likes: 0, id: v4()});
    props.onToggleViewForm();
  }

  return(
    <div>
      <form onSubmit={handleFormSubmission}>
        <h3>Title:</h3>
        <input type="text" ref={(input)=>{_postTitle=input;}}/>
        <p>Text:</p>
        <input type="text" ref={(input)=>{_postText=input;}}/>
        <button type="submit" >Submit</button>

      </form>
    </div>

  );
}
Form.propTypes = {
  onAddNewPost: PropTypes.func,
  onToggleViewForm: PropTypes.func
};

export default Form;
