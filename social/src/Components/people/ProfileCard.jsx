import React from "react";
import "./ProfileCard.css";
import userApi from '../../API/UserApi'
import { Link } from "react-router-dom";

function ProfileCard({ user }) {
  const CurentUser = JSON.parse(localStorage.getItem("user"));
  function AddFriendHandler(params) {
    userApi.addFriend(CurentUser._id, { friendId: user._id })
    alert("added friend ");
  }
  return (



    <figure className="snip1336">
      <img src={user.coverImg || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"} alt="sample87" />
      <figcaption>

        <img src={user.img || 'https://i.imgur.com/aS2HUzv.jpeg'} alt="profile-sample4" className="profile" />

        <h2>{user.fName + ' ' + user.lName} <span>{user.job}</span></h2>
        <div className="col-12 d-flex justify-content-evenly mt-3">

          <button type="button" className="btn btn-outline-primary p-1  col-5"  onClick={AddFriendHandler}>Add</button>
                
          <button type="button" className="btn btn-outline-secondary p-1 col-5 ">
            <Link to={`/profile/${user._id}`}>
              More Info
            </Link>
          </button>

        </div>

      </figcaption>
    </figure>
  );
}

export default ProfileCard;