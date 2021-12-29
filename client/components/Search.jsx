import React from 'react';
import RepoCard from './RepoCard';
import SearchBar from './SearchBar';
import PageNav from './PageNav';
import Error from './Error';

const Search = (props) => {

  //store the results into array repo
  const repos = [];
  //if the result option is not empty then create RepoCards in repo array
  if(props.search.results){
    props.search.results.forEach(repo => {
      repos.push(<RepoCard key={repo.html_url} repo={repo} />);
    })
  }

  return <><SearchBar path={'search'} search={props.search} updateLang={props.updateLang} updateSort={props.updateSort} updateOrder={props.updateOrder} updateSearch={props.updateSearch} getResults={props.getResults}/>
    <div className="search-results">
		<div className="box-info">
      <div><h3>Results:</h3></div> 
      <div className="box-inner"><h3>{props.search.query}</h3></div>
    </div>
    <PageNav search={props.search} updatePage={props.updatePage} updatePerPage={props.updatePerPage} getResults={props.getResults} />
    {repos.length? repos:props.search.error? 'Error Occurred':'Zero Match.'}
    <Error error={props.search.error} />
    </div></>;
};

export default Search;