import React from 'react';

const Comments = ({ comments, loaded }) => {
  if (!loaded) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {comments.map(comment => (
        <li key={comment.id} className='list-group-item'>
          {comment.body}
        </li>
      ))}
    </ul>
  );
};

export default Comments;