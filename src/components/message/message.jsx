import React from 'react';
import UserImage from '../userImage/userImage';

function Message({
  messageText,
  date,
  user,
  showImage,
  userInfo: { imgUrl, name },
}) {
  const time = new Date(date);
  return (
    <li className="message-item">
      <div
        className={
          user
            ? 'message-block _user'
            : showImage
            ? 'message-block'
            : 'message-block _without-image'
        }
      >
        {!user && showImage && <UserImage src={imgUrl} />}
        <div className={user ? 'message-info _user' : 'message-info'}>
          {!user ? <p className="user-name">{name}</p> : null}
          <p className="message-text">{messageText}</p>
        </div>
        <p className="message-date">{`${time.getUTCHours()}:${time.getUTCMinutes()}`}</p>
      </div>
    </li>
  );
}

export default Message;
