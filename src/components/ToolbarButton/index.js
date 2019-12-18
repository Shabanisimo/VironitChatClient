import React from 'react';

export default function ToolbarButton(props) {
  const { icon } = props;
  return <i className={`toolbar-button ${icon}`} />;
}
