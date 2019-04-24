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
      <style jsx>{`
          h3{
            font-family: 'Schoolbell', cursive;
            font-size: 2rem;
          }
          .title{
            width: 24rem;
            height: 2rem;
          }
          input{
            width: 25rem;
            height: 10rem;
          }
          button {
            background-color: #77E3C4;
            padding: 10px 10px 10px 10px;
            text-transform: uppercase;
          }

      `}</style>
      <form onSubmit={handleFormSubmission}>
        <h3>Title:</h3>
        <input className="title" type="text" ref={(input)=>{_postTitle=input;}}/>
        <p>Text:</p>
        <input type="text" ref={(input)=>{_postText=input;}}/>
        <br/>
        <br/>
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
