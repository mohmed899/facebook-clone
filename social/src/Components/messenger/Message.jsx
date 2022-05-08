import "./Message.css";


export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://i.imgur.com/ZTh6LBh.jpeg"
          alt=""
        />
        <p className="messageText">{"dslcnsjdcb skdgcilusgdicsdhouhsfdfjhso; jdhcos;djhosh;"}</p>
      </div>
      <div className="messageBottom">{"format(message.createdAt)"}</div>
    </div>
  );
}