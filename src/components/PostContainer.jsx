import React from 'react';
import Posts from './Posts';
import { v4 } from 'uuid';

function PostContainer() {

  const listOfPosts = [
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
  ];
  return(


    <div>
      <h1>Post One</h1>
      {listOfPosts.map((post) =>
        <Posts title={post.title}
          text={post.text}
          likes={post.likes}
          dislikes={post.dislikes}
          id={post.id}
          key={post.id}/>
      )}
    </div>

  );
}

export default PostContainer;
