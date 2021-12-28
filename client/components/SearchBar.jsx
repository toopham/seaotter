import React from 'react';
import { useNavigate } from 'react-router-dom';
import languages from '../constants/languages';

const SearchBar = (props) => {
  const navigate = useNavigate();

  const checkboxes = [];
  languages.forEach(option => {
    checkboxes.push(<label className="container" key={option.value}>{option.label}
    <input type="checkbox" id={option.value} checked={props.lang.includes(option.value)? "checked":""} onChange={(e) => langCheck(e)}/>
    <span className="checkmark"></span>
    </label>);
  });

  const searchInput = (e) => {
    props.updateSearch(e.target.value);

  };

  const langCheck = (e) => {
    let newLang = [];
    //if the lang is checked, then remove
    if(props.lang.includes(e.target.id)){
      props.lang.forEach(lang => {
        if(lang!=e.target.id) newLang.push(lang);
      });
    }
    else{
      newLang = [...props.lang];
      newLang.push(e.target.id);
    }

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
        <div>{checkboxes}</div>
      </div>
    </div>);
};

export default SearchBar;