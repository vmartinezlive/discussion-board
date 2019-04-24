import React from 'react';
import PostContainer from './PostContainer';
import Form from './Form';
import { v4 } from 'uuid';
import { clipart } from './ladies.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      masterListOfPosts: [
        {
          title: 'Something interesting',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: 23,
          id: v4()
        },
        {
          title: 'Something controversial',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          likes: 12,
          id: v4()
        }
      ]
    };
    this.handleAddNewPost = this.handleAddNewPost.bind(this);
    this.handleToggleViewForm = this.handleToggleViewForm.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  //Defines a function to add a new post to the masterList. We need to pass it down to the Form.
  //When using "this" dont forget to manually bind this in the constructor!
  handleAddNewPost(newPost){
    let newListOfPosts = this.state.masterListOfPosts.slice();
    newListOfPosts.push(newPost);
    this.setState({masterListOfPosts: newListOfPosts});
  }

  handleToggleViewForm(){
    this.setState({formVisible: !this.state.formVisible});
  }

  handleUpvote(id) {
    let newListOfPosts = this.state.masterListOfPosts.slice();
    newListOfPosts.forEach((post)=>{
      if (post.id === id) {
        post.likes++;
      }
    });
    this.setState({masterListOfPosts: newListOfPosts});
  }

  handleDownvote(id) {
    let newListOfPosts = this.state.masterListOfPosts.slice();
    newListOfPosts.forEach((post)=>{
      if (post.id === id) {
        post.likes--;
      }
    });
    this.setState({masterListOfPosts: newListOfPosts});
  }

  // passing handleAddNewPost to the <Form> component as a prop. Renamed onAddNewPost
  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisible) {
      currentlyVisibleContent = <Form
        onAddNewPost={this.handleAddNewPost}
        onToggleViewForm={this.handleToggleViewForm}/>;
    } else {
      currentlyVisibleContent = <PostContainer
        childListOfPosts={this.state.masterListOfPosts}
        onUpvote={this.handleUpvote}
        onDownvote={this.handleDownvote}/>;
    }
    return(
      <div>
        <style jsx>{`
              img{
                width: 60vw;
                height: 50vh;
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
              }

                `}</style>
              <img src={require( './ladies.jpg')}/>
        <button type="button" onClick={this.handleToggleViewForm}>Make New Post</button>
        {currentlyVisibleContent}
      </div>
    );
  }
}


export default App;
