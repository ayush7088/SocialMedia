import React from 'react';
import ProfileSide from '../../components/profileSide/ProfileSide';
import './Home.css';
import PostSide from '../../components/PostSide/PostSide';

const home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <div className="RigthtSide">RightSide</div>

    </div>
  )
}

export default home