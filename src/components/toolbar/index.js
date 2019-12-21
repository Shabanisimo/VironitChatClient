import React from 'react';

export default function Toolbar(props) {
  const {
    title,
    leftItems,
    rightItems,
    rightItemHandler,
    leftItemHandler,
  } = props;
  return (
    <div className="toolbar">
      <div className="left-items" onClick={() => leftItemHandler()}>
        {leftItems}
      </div>
      <h1 className="toolbar-title">{title}</h1>
      <div className="right-items" onClick={() => rightItemHandler()}>
        {rightItems}
      </div>
    </div>
  );
}
