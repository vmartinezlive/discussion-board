import React from 'react';
import PostContainer from './PostContainer';
import Form from './Form';
import { v4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterListOfPosts: [
        {
          title: 'Something interesting',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: 23,
          dislikes: 3,
          id: v4()
        },
        {
          title: 'Something controversial',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: 12,
          dislikes: 14,
          id: v4()
        }
      ]
    };
    this.handleAddNewPost = this.handleAddNewPost.bind(this);
  }

  //Defines a function to add a new post to the masterList. We need to pass it down to the Form.
  //When using "this" dont forget to manually bind this in the constructor!
  handleAddNewPost(newPost){
    let newListOfPosts = this.state.masterListOfPosts.slice();
    newListOfPosts.push(newPost);
    this.setState({masterListOfPosts: newListOfPosts});
  }

  // passing handleAddNewPost to the <Form> component as a prop. Renamed onAddNewPost
  render(){
    return(
      <div>
        <h1>Test App</h1>
        <PostContainer childListOfPosts={this.state.masterListOfPosts} />
        <Form onAddNewPost={this.handleAddNewPost}/>
      </div>
    );
  }
}


export default App;
