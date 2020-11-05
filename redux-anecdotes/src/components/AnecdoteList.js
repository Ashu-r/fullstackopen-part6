import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { newNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
	const dispatch = useDispatch();
	const anecdotes = useSelector((state) => state.anecdotes);
	const vote = (id, content) => {
		console.log('vote', id);
		dispatch(addVote(id));
		dispatch(newNotification(`You voted ${content}`));
		setTimeout(() => {
			dispatch(newNotification(''));
		}, 5000);
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
							<button
								onClick={() => vote(anecdote.id, anecdote.content)}
							>
								vote
							</button>
						</div>
					</div>
				))}
		</div>
	);
};
export default AnecdoteList;
