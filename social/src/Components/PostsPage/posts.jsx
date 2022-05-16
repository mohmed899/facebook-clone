
import "./post.css";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserApi from '../../API/UserApi'
import PostApi from "../../API/postApi";
import { UserContext } from "../Context/UserContextProvider";
export default function Post({ post }) {

  let [postOwner, setPostOwner] = useState({})
  let [PostLikes, setPostLike] = useState(post.likes)
  let [isLiked, setIsLiked] = useState(false)
  useEffect(() => {
    (async () => {
      const user = await UserApi.getUserById(post.userId);
      setPostOwner(user);
    })()
  }, [])


  let socket = useContext(UserContext);
  function likeHandler(params) {
     if(!isLiked){
       setPostLike(++PostLikes);
       setIsLiked(true);
     }
     else{
      setPostLike(--PostLikes);
      setIsLiked(false);
     }
     PostApi.UpdatePostLiks(post._id,{likes:PostLikes})
  
    socket.emit("postLiked",{postId:post._id,postOwnerId:postOwner._id});

  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${postOwner._id}`}>
              <img
                className="postProfileImg"
                src={postOwner.img}
                alt=""
              />
            </Link>
         
            <span className="postUsername">{postOwner.fName + ' ' + postOwner.lName}</span>
         
            <span className="postDate">{post.postDate}</span>
          </div>
          
          <div className="postTopRight">
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <div className="postCenter">
          <textarea className="PostText m-auto" type="text" value={post.body} readOnly />

          {

            (post.img) ?
              <img className="postImg" src={'http://localhost:3001/' + post.img} alt="" /> : null
          }
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src='../assets/like.png'
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src='../assets/heart.png'
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{PostLikes} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.coments} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}