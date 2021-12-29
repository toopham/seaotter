import axios from 'axios';

export function requestGetResults(body) {
	let query = 'q';
	let sort = '';
	let order = '';
  if(body.query) query = body.query.replace(' ', '+');
  let lang = '';
  if(body.lang!='any') lang = '+language:'+body.lang;
	if(body.sort!='none') sort = '&sort='+body.sort;
	if(body.order!='none') order = '&order='+body.order;

  return axios.request({
    method: 'get',
    url: `https://api.github.com/search/repositories?q=${query}${lang}${sort}${order}&page=${body.page}&per_page=${body.perpage}`,
  });
}