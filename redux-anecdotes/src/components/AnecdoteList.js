/* eslint-disable react/jsx-indent */
import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { newNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
	const dispatch = useDispatch();
	const anecdotesToShow = () => {
		if (props.filter === 'ALL') {
			return props.anecdotes;
		}
		return props.anecdotes.filter((ane) => {
			return (
				ane.content
					.toLowerCase()
					.indexOf(props.filter.toLowerCase()) !== -1
			);
		});
	};
	const vote = (anecdote) => {
		dispatch(addVote(anecdote.id));
		dispatch(newNotification(`You voted ${anecdote.content}`, 2));
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotesToShow()
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

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter,
	};
};

const connectedAnecdoteList = connect(mapStateToProps)(AnecdoteList);
export default connectedAnecdoteList;
