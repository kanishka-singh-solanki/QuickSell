import React from 'react';

export const getGroupIcon = (grouping, title) => {
  switch (grouping) {
    case 'status':
      return null; // Status icon will be added separately
    case 'priority':
      return getPriorityIcon(getPriorityValue(title));
    case 'user':
      return getUserIcon(title);
    default:
      return null;
  }
};

export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case 'todo': 
      return <img className="icon status-icon" src='/images/To_do.svg' alt='todo' />;
    case 'in progress': 
      return <img className="icon status-icon" src='/images/in_progress.svg' alt='in progress' />;
    case 'done': 
      return <img className="icon status-icon" src='/images/Done.svg' alt='done' />;
    case 'canceled': 
      return <img className="icon status-icon" src='/images/Canceled.svg' alt='canceled' />;
    case 'backlog': 
      return <img className="icon status-icon" src='/images/Backlog.svg' alt='backlog' />;
    default: 
      return null;
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4: 
      return <img className="icon priority-icon urgent" src='/images/Urgent_priority_colour.svg' alt='urgent' />;
    case 3: 
      return <img className="icon priority-icon high" src='/images/High_Priority.svg' alt='high' />;
    case 2: 
      return <img className="icon priority-icon medium" src='/images/Medium_Priority.svg' alt='medium' />;
    case 1: 
      return <img className="icon priority-icon low" src='/images/Low_Priority.svg' alt='low' />;
    default: 
      return <img className="icon priority-icon no-priority" src='/images/No_priority.svg' alt='no-priority' />;
  }
};

export const getUserIcon = (name) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  return <div className="user-icon">{initials}</div>;
};

const getPriorityValue = (priorityName) => {
  const priorities = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
  return priorities.indexOf(priorityName);
};