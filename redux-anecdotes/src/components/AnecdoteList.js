import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { newNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
	const dispatch = useDispatch();
	const anecdotes = useSelector((state) => {
		if (state.filter === 'ALL') {
			return state.anecdotes;
		}
		return state.anecdotes.filter((ane) => {
			return (
				ane.content
					.toLowerCase()
					.indexOf(state.filter.toLowerCase()) !== -1
			);
		});
	});
	const vote = (anecdote) => {
		dispatch(addVote(anecdote.id));
		dispatch(newNotification(`You voted ${anecdote.content}`, 2));
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes
				.sort((a, b) => a.votes < b.votes)
				.map((anecdote) => (
					<div key={anecdote.id}>
						<div>{anecdote.content}</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => vote(anecdote)}>vote</button>
						</div>
					</div>
				))}
		</div>
	);
};
export default AnecdoteList;
