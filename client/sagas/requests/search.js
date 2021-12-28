import axios from 'axios';

export function requestGetResults(body) {
	const query = body.query.replace(' ', '+');
	console.log('QUERY: ',query);
  return axios.request({
    method: 'get',
    url: `https://api.github.com/search/repositories?q=${query}+language:assembly&sort=stars&order=desc`,
  });
}