import React from 'react';
import ProfileSide from '../../components/profileSide/ProfileSide';
import './Home.css';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';

const home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />

    </div>
  )
}

export default home