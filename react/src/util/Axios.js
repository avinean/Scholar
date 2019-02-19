import axios from 'axios';

const post = axios.create({
	baseURL: '/',
	headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

const get = axios.create({
	baseURL: '/',
});

export {post, get};