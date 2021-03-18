import React from 'react';
import PhotoGet from './Endpoints/PhotoGet';
import PhotoPost from './Endpoints/PhotoPost';
import TokenPost from './Endpoints/TokenPost';
import UserPost from './Endpoints/UserPost';

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <h2>Token POST</h2>
      <TokenPost />
      <h2>Photo POST</h2>
      <PhotoPost />
      <h2>Photo GET</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
