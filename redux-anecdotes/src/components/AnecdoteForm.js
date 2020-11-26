import React from 'react';
import { connect } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { newNotification } from '../reducers/notificationReducer';

const NewAnecdote = (props) => {
	const addAnecdote = async (event) => {
		event.preventDefault();
		const content = event.target.anecdote.value;
		event.target.anecdote.value = '';
		props.createAnecdote(content);
		props.newNotification(`${content} added`, 5);
	};

	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addAnecdote}>
				<div>
					<input name='anecdote' />
				</div>
				<button type='submit'>create</button>
			</form>
		</div>
	);
};

export default connect(null, { createAnecdote, newNotification })(
	NewAnecdote
);
