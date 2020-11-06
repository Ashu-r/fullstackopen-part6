/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NewAnecdote from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';
import anecdoteService from './services/anecdotes';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		anecdoteService
			.getAll()
			.then((ane) => dispatch(initializeAnecdotes(ane)));
	}, [dispatch]);
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
