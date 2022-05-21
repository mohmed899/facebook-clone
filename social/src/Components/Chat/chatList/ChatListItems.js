import React, { Component } from "react";
import Avatar from "./Avatar";
import UserApi from "../../../API/UserApi";
export default class ChatListItems extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    ConvName: "defult Name",
    ConvImg: "defult img",

  };

  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  
    this.props.SetConvFun ({ConvId:this.props.ConvId ,ConvName:this.state.ConvName , ConvImg:this.state.ConvImg},this.props.OtherID)
  };

  componentDidMount() {
   
    UserApi.getUserById(this.props.OtherID).then(

      (otherUser)=>{
        this.setState({ConvName:otherUser.fName,ConvImg:otherUser.img})
      }
    )
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.state.ConvImg ? this.state.ConvImg : "https://i.imgur.com/fHn488K.jpeg"
          }
          isOnline={this.props.isOnline}
        />

        <div className="userMeta">
          <p>{this.state.ConvName}</p>
         
        </div>
      </div>
    );
  }
}
