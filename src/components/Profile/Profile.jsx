import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/Profileinfo'

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} />
    </div>
  )
}

export default Profile;