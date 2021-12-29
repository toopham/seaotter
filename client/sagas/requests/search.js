import axios from 'axios';

export function requestGetResults(body) {
	let query = 'q';
	let sort = '';
	let order = '';
  if(body.query) query = body.query.replace(' ', '+');
  let lang = '';
  if(body.lang.value!='all') lang = '+language:'+body.lang.value;
	if(body.sort.value) sort = '&sort='+body.sort.value;
	if(body.order.value) order = '&order='+body.order.value;

  return axios.request({
    method: 'get',
    url: `https://api.github.com/search/repositories?q=${query}${lang}${sort}${order}&page=${body.page}&per_page=${body.perpage}`,
  });
}