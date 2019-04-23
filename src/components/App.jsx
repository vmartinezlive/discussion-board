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
  }

  render(){
    return(
      <div>
        <h1>Test App</h1>
        <PostContainer childListOfPosts={this.state.masterListOfPosts}/>
        <Form/>
      </div>
    );
  }
}


export default App;
