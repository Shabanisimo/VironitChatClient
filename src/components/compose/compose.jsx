import React from 'react';

export default function Compose(props) {
  const { onChange, value, onSend } = props;
  return (
    <form className="compose" onSubmit={onSend}>
      <input
        onChange={onChange}
        value={value}
        onSubmit={onSend}
        type="text"
        className="compose-input"
        placeholder="Type a message, @name"
      />
      {props.rightItems}
    </form>
  );
}
