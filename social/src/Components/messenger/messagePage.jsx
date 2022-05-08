import "./style.css";

import Conversation from "./conversation";
import Message from "./Message";
import ChatOnline from "./ChatOnlin";


export default function Messenger() {
  function setNewMessage(params) {

  }
  function handleSubmit(params) {

  }
  return (
    <>

      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation></Conversation>
            <Conversation></Conversation>

          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <Message></Message>
            <Message></Message>
            <Message own={true}></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
          </div>
          <div className="chatBoxBottom">
            <textarea
              className="chatMessageInput"
              placeholder="write something..."
              onChange={(e) => setNewMessage(e.target.value)}
              value={"newMessage"}
            ></textarea>
            <button className="chatSubmitButton" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>

        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}