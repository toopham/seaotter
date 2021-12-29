import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchOptions from './SearchOptions';

const SearchBar = (props) => {

  //If key pressed is entered in search 
  const enterSearch = (e) =>{
    if(e.key === 'Enter'){
      search();
    }
  }

  const navigate = useNavigate();
	//call GET_RESULTS action to trigger redux saga 
  //then navigate to path /search
	const search = () =>{
		props.getResults();
    if(props.path!='search') navigate("/search", { replace: true});
	}

  //onChange from search-input
  const searchInput = (e) => {
    props.updateSearch(e.target.value);
    if(props.path==='search') props.getResults();
  };

  return (<div className="search-bar">
      <h2>Seach GitHub Projects</h2>
      <div className="search-div">
        <input type="text" placeholder="search for repositories" id="search-input" autoFocus onChange={(e) => searchInput(e)} onKeyUp={(e) => enterSearch(e)}/>
        <button id="search" onClick={() => search()}>Search</button>
      </div>
      <SearchOptions search={props.search} path={props.path? props.path:'home'} updateLang={props.updateLang} updateSort={props.updateSort} updateOrder={props.updateOrder} getResults={props.getResults}/>
  </div>);
};

export default SearchBar;