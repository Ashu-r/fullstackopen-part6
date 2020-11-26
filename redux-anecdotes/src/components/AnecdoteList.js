/* eslint-disable react/jsx-indent */
import React from 'react';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { newNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
	console.log(props);

	const vote = (anecdote) => {
		props.addVote(anecdote.id);
		props.newNotification(`You voted ${anecdote.content}`, 5);
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{props.anecdotes
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
	if (state.filter === 'ALL') {
		return { anecdotes: state.anecdotes };
	}
	return {
		anecdotes: state.anecdotes.filter((ane) => {
			return (
				ane.content
					.toLowerCase()
					.indexOf(state.filter.toLowerCase()) !== -1
			);
		}),
	};
};

const mapDispatchToProps = {
	addVote,
	newNotification,
};

const connectedAnecdoteList = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList);
export default connectedAnecdoteList;
