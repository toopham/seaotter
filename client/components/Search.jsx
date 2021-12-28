import React from 'react';
import RepoCard from './RepoCard';

const Search = (props) => {

  const repos = [];

  props.results.forEach(repo => {
    repos.push(<RepoCard key={repo.html_url} repo={repo} />);
  })
  
  console.log('RESULTS : ', props.results);
  return <div><h1>Results: {props.query}</h1>
    {repos}
    </div>;
};

export default Search;