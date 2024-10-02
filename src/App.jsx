import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import { fetchTickets } from './api';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => {
    const saved = localStorage.getItem('viewState');
    return saved ? JSON.parse(saved).grouping : 'status';
  });
  const [sorting, setSorting] = useState(() => {
    const saved = localStorage.getItem('viewState');
    return saved ? JSON.parse(saved).sorting : 'priority';
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTickets();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
        // You could set an error state here and display it to the user
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('viewState', JSON.stringify({ grouping, sorting }));
  }, [grouping, sorting]);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
};

export default App;