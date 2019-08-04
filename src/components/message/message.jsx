import React from 'react';
import UserImage from '../userImage/userImage';

function Message({
  messageText,
  date,
  user,
  showImage,
  userInfo: { imgUrl, name },
}) {
  return (
    <li className="message-item">
      <div className={user ? 'message-block __user' : 'message-block'}>
        {showImage && <UserImage src={imgUrl} />}
        <div className="message-info">
          <p className="user-name">{name}</p>
          <p className="message-text">{messageText}</p>
        </div>
        <p className="message-date">{date}</p>
      </div>
    </li>
  );
}

export default Message;
