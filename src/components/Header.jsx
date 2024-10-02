import React, { useState } from 'react';

const Header = ({ grouping, setGrouping, sorting, setSorting }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
      <img src="/images/Display.svg" alt="display" /> Display{' '}
      <img src="/images/Down.svg" alt="down" />
      </button>
      {isOpen && (
        <div className="dropdown">
          <div>
            <label>Grouping</label>
            <select value={grouping} onChange={(e) => {setGrouping(e.target.value);setIsOpen(false)}}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label>Ordering</label>
            <select value={sorting} onChange={(e) => {setSorting(e.target.value);setIsOpen(false)}}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;