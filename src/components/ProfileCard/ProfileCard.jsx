import React from 'react';
import './ProfileCard.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';

const ProfileCard = () => {
    const ProfilePage = true;

    return (
        <div className="ProfileCard">
            <div className="ProfileImg">
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>

            <div className="ProfileName">
                <span>Harry Potter</span>
                <span>Jadugar at Hogwarts!</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>2398</span>
                        <span>Followings</span>
                    </div>

                    <div className="vl"></div>

                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>

                    {ProfilePage && (
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>

            {ProfilePage ? '' : <span>My Profile</span>}
        </div>
    );
}

export default ProfileCard;
