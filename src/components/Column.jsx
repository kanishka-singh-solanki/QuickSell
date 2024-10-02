import React from 'react';
import Card from './Card';
import { getStatusIcon } from '../utils/icons';

const Column = ({ title, tickets, users, grouping, groupIcon }) => {
  return (
    <div className="column">
      <h2>
        {groupIcon}
        {grouping === 'status' && getStatusIcon(title)}
        {title}
        <span className="ticket-count">{tickets.length}</span>
        <div className='col-icon-1'>
          <img className="col-icon-2" src='/images/add.svg' alt='add' />
          <img className="col-icon-2" src='/images/3_dot_menu.svg' alt='menu' />
        </div>
      </h2>
      {tickets.map(ticket => (
        <Card 
          key={ticket.id} 
          ticket={ticket} 
          users={users} 
          grouping={grouping}
        />
      ))}
    </div>
  );
};

export default Column;