import React from 'react';
import Message from '../message/message';
import moment from 'moment';

const MessageList = props => {
  const { room, userId } = props;
  const { Messages } = room;

  const renderMessages = () => {
    return Messages.map((message, id, messageArray) => {
      let previous = messageArray[id - 1];
      let current = message;
      current.timestamp = message.createdAt;
      let next = messageArray[id + 1];
      let isMine = current.SenderId === userId;
      let currentMoment = moment(current.createdAt);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.createdAt);
        let previousDuration = moment.duration(
          currentMoment.diff(previousMoment)
        );
        prevBySameAuthor = previous.SenderId === current.SenderId;
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.createdAt);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.SenderId === current.SenderId;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      return (
        <Message
          key={id}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );
    });
  };

  return (
    <div className="message-list">
      <div className="message-list-container">{renderMessages()}</div>
    </div>
  );
};

export default MessageList;
