import React from 'react';
import NewAnecdote from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
	return (
		<div>
			<Filter />
			<Notification />
			<AnecdoteList />
			<NewAnecdote />
		</div>
	);
};

export default App;
