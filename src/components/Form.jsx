import React from 'react';


function Form(){
  let _postTitle = null;
  let _postText = null;

  function handleFormSubmission(e) {
    e.preventDefault();
    console.log(_postTitle.value);
    console.log(_postText.value);
  }

  return(
    <div>
      <form onSubmit={handleFormSubmission}>
        <h3>Title:</h3>
        <input type="text" ref={(input)=>{_postTitle=input;}}/>
        <p>Text:</p>
        <input type="text" ref={(input)=>{_postText=input;}}/>
        <button type="submit">Submit</button>

      </form>
    </div>

  );
}

export default Form;
