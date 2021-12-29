import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import languages from '../constants/languages';

const SearchBar = (props) => {
  const navigate = useNavigate();

  /* START Create Search Params/Options*/
  const options = [<option value="any" key={'any'}>Any</option>];
  languages.forEach(option => {
    options.push(<option value={option.value} key={option.value}>{option.label}</option>);
  });
  const sorts = [<option value="stars" key={'stars'}>Stars</option>, <option value="forks" key={'forks'}>Forks</option>, <option value="help-wanted-issues" key={'issues'}>Help Issues</option>,<option value="updated" key={'updated'}>Updated</option>]
  const orders =[<option value="desc" key={'desc'}>DESC</option>, <option value="asc" key={'asc'}>ASC</option>];

  const searchInput = (e) => {
    props.updateSearch(e.target.value);
    if(props.path==='search') props.getResults();
  };

  const optionSelect = (e) => {
    const option = e.target.value;
    const id = e.target.id;

    if(id==='lang') props.updateLang(option);
    else if(id==='sort') props.updateSort(option);
    else if(id==='order') props.updateOrder(option);

    if(props.path==='search') props.getResults();
  }

  /* END OF Search Params/Options*/

  //If key pressed is entered in search then call GET_RESULTS action to trigger redux saga 
  //then navigate to path /search
  const enterSearch = (e) =>{
    if(e.key === 'Enter'){
      props.getResults();
      if(props.path!='search') navigate("/search", { replace: true});
    }
  }

  //If path is changed to /search then fill search input and language option with values from state
  useEffect(()=>{
    const searchInput = document.getElementById('search-input');
    searchInput.value = props.search.query;

    const language = document.getElementById('lang');
    language.value = props.search.lang;

  }, [props.path]);

  return (<div className="search-input">
    <h2>Seach GitHub Projects</h2>
      <input type="text" placeholder="search for repositories" id="search-input" autoFocus onChange={(e) => searchInput(e)} onKeyUp={(e) => enterSearch(e)}/>
      <div className="options">
        <div className="option">Language 
          <select id='lang' onChange={(e) => optionSelect(e)}>
					  {options}
					</select>
				</div>
        <div className="option">Sort by 
          <select id='sort' onChange={(e) => optionSelect(e)}>
					  {sorts}
					</select>
				</div>
        <div className="option">Order by 
          <select id='order' onChange={(e) => optionSelect(e)}>
					  {orders}
					</select>
				</div>
      </div>
    </div>);
};

export default SearchBar;