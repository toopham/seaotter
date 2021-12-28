import axios from 'axios';

export function requestGetResults(body) {
  return axios.request({
    method: 'post',
    url: '/api/search',
    data: body,
  });
}