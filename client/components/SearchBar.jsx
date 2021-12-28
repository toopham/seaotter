import React from 'react';
import { useNavigate } from 'react-router-dom';
import languages from '../constants/languages';

const SearchBar = (props) => {
  const navigate = useNavigate();

  const options = [<option value="any" selected>Any</option>];
  languages.forEach(option => {
    options.push(<option value={option.value} key={option.value}>{option.label}</option>);
  });

  const searchInput = (e) => {
    props.updateSearch(e.target.value);

  };

  const langSelect = (e) => {
    let newLang = e.target.value;
		console.log('LANG NOW IS : ', e.target.value);

    props.updateLang(newLang);
  }

  const enterSearch = (e) =>{
    if(e.key === 'Enter'){
      props.getResults();
      navigate("/search", { replace: true});
    }

  }

  return (<div className="search-input">
    <h2>Seach GitHub Projects</h2>
      <input type="text" placeholder="search for repositories" id="search-input" autoFocus onChange={(e) => searchInput(e)} onKeyUp={(e) => enterSearch(e)}/>
      <div className="checkboxes">
        <h3>Languages</h3> 
        <div>
					<select id='lang' onChange={(e) => langSelect(e)}>
					{options}
					</select>
				</div>
      </div>
    </div>);
};

export default SearchBar;