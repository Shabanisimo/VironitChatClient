import React from 'react';

export default function RoomSearch({ value, onChange }) {
  return (
    <div className="conversation-search">
      <input
        type="search"
        className="conversation-search-input"
        placeholder="Search Messages"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
}
