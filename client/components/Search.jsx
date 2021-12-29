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
    <div className="search-results"><h2>Results: {props.search.query}</h2>
    <PageNav search={props.search} updatePage={props.updatePage} updatePerPage={props.updatePerPage} getResults={props.getResults} />
    {repos.length? repos:'Zero Match.'}
    <Error error={props.search.error} />
    </div></>;
};

export default Search;