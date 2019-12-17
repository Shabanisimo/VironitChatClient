import React from 'react';
import Message from '../message/message';
import Toolbar from '../toolbar';
import ToolbarButton from '../ToolbarButton';
import moment from 'moment';

const MessageList = props => {
  const { room, userId } = props;
  const { Users, Messages } = room;
  const messages = room.Messages;

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    messages.forEach((message, id, messageArray) => {
      while (i < messageCount) {
        let previous = messageArray[id - 1];
        let current = messageArray[id];
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

        tempMessages.push(
          <Message
            key={id}
            isMine={isMine}
            startsSequence={startsSequence}
            endsSequence={endsSequence}
            showTimestamp={showTimestamp}
            data={current}
          />
        );
      }
    });

    return tempMessages;
  };

  return (
    <div className="message-list">
      <Toolbar
        title="Conversation Title"
        rightItems={[
          <ToolbarButton
            key="info"
            icon="ion-ios-information-circle-outline"
          />,
          <ToolbarButton key="video" icon="ion-ios-videocam" />,
          <ToolbarButton key="phone" icon="ion-ios-call" />,
        ]}
      />

      <div className="message-list-container">{renderMessages()}</div>
    </div>
  );
};

export default MessageList;
