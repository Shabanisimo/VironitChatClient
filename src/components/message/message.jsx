import React from 'react';
import moment from 'moment';

export default function Message(props) {
  const { data, isMine, startsSequence, endsSequence, showTimestamp } = props;
  const friendlyTimestamp = moment(data.timestamp).format('LLLL');
  return (
    <div
      className={[
        'message-item',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`,
      ].join(' ')}
    >
      {showTimestamp && <div className="timestamp">{friendlyTimestamp}</div>}

      <div className="bubble-container">
        <div className="bubble" title={friendlyTimestamp}>
          {data.messageText}
        </div>
      </div>
    </div>
  );
}
