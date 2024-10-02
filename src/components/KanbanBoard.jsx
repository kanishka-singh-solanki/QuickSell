import React, { useMemo } from 'react';
import Column from './Column';
import { getGroupIcon } from '../utils/icons';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const groupedAndSortedTickets = useMemo(() => {
    let grouped = {};

    // Grouping
    if (grouping === 'status') {
      grouped = tickets.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        (acc[user.name] = acc[user.name] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      const priorities = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
      grouped = tickets.reduce((acc, ticket) => {
        (acc[priorities[ticket.priority]] = acc[priorities[ticket.priority]] || []).push(ticket);
        return acc;
      }, {});
    }

    // Sorting
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return grouped;
  }, [tickets, users, grouping, sorting]);

  return (
    <div className="kanban-board">
      {Object.entries(groupedAndSortedTickets).map(([title, tickets]) => (
        <Column 
          key={title} 
          title={title} 
          tickets={tickets} 
          users={users} 
          grouping={grouping}
          groupIcon={getGroupIcon(grouping, title)}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;