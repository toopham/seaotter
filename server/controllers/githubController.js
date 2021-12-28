const githubController = {}
const { Octokit } = require("@octokit/core");
const token = require('../../token.js');

const octokit = new Octokit({ auth: token });

githubController.search = async (req, res, next) => {
  const body = req.body;

  const results = await octokit.request('GET /search/repositories', {
    q: body.query
  })

  res.locals.results = [];

  if(results.status === 200){
    for(let key in results.data.items){
      console.log('DATA KEY ', key);
      //console.log('DATA ', results.data[key]);
      res.locals.results.push(results.data.items[key]);
    }
  }

  console.log('LENGTH: ', res.locals.results.length);
  return next();
}

githubController.test = async (req, res, next) => {
  const query = req.query.query;

  const results = await octokit.request('GET /search/repositories', {
    q: query
  })

  if(results.status === 200) res.locals.results = results.data;
  else res.locals.results = {};

  console.log('RESULTS FROM API : ', query);

  return next();
}

module.exports = githubController;