import axios from 'axios';

export function requestGetResults(body) {
	let query = 'q';
  if(body.query) query = body.query.replace(' ', '+');
  let lang = '';
  if(body.lang!='any') lang = '+language:'+body.lang;

  return axios.request({
    method: 'get',
    url: `https://api.github.com/search/repositories?q=${query}${lang}&sort=${body.sort}&order=${body.order}&page=${body.page}&per_page=${body.perpage}`,
  });
}