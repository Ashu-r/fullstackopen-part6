import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

const getAll = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

const createNew = async (content) => {
	const newObject = { content, id: getId(), votes: 0 };
	const response = await axios.post(baseUrl, newObject);
	return response.data;
};

const upVote = async (id) => {
	const anecdoteToVote = await axios.get(`${baseUrl}/${id}`);
	const updateAnecdoteWithVote = {
		...anecdoteToVote.data,
		votes: anecdoteToVote.data.votes + 1,
	};
	const response = await axios.put(
		`${baseUrl}/${id}`,
		updateAnecdoteWithVote
	);
	return response.data;
};

export default { getAll, createNew, upVote };
