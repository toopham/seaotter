import React, { useEffect } from 'react';
import languages from '../constants/languages';
import Select from 'react-select';

const SearchOptions = (props) =>{

  /* START Create Search Params/Options*/
  const options = [{ value: 'all', label: 'All' }];
  languages.forEach(option => {
    options.push({ value: option.value, label: option.label });
  });

  const sorts = [{ value: 'stars', label: 'Stars' }, { value: 'forks', label: 'Forks' }, { value: 'help-wanted-issues', label: 'Issues' }, { value: 'updated', label: 'Updated' }]
  const orders =[{ value: 'desc', label: 'DESC' }, { value: 'asc', label: 'ASC' }];

  //On selecting an option in Select, this function is called to update the redux state using the dispatcher functions
  const optionSelect = (select, e) => {
    const option = {value: e.value, label: e.label};

    if(select==='lang') props.updateLang(option);
    else if(select==='sort') props.updateSort(option);
    else if(select==='order') props.updateOrder(option);

    if(props.path==='search') props.getResults();
  }

  /* END OF Search Params/Options*/

  /* STYLING for Select */
  const customStyles = {
    menu: (provided, {selectProps}) => ({
      ...provided,
      marginTop: 0,
      marginLeft: 10,
      width: selectProps.width,
      color: 'red',
    }),
    option: (provided, { isDisabled, isFocused, isSelected }) => ({
      ...provided,
      borderBottom: '1px solid gray',
      color: isSelected ?  'white': 'black',
      padding: 5,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? '#073b4c'
        : isFocused
        ? 'rgba(7,59,76,0.3)'
        : 'white',
    }),
    control: (styles, {selectProps}) => ({ 
      ...styles, 
      backgroundColor: 'white',
      width: selectProps.width,
      height: 25,
      padding: 0,
      marginLeft: 10
    }),
    input: (styles) => ({ ...styles, height: 25, alignItems: 'center', display: 'flex', }),
  }

  //fill search input with value from state
  //only do so when path is change, i.e from / to /search
  useEffect(()=>{
    const searchInput = document.getElementById('search-input');
    if(searchInput) searchInput.value = props.search.query;

  }, [props.path]);


  return (<div className="options">
    <div className="option">Language 
      <Select defaultValue={props.search.lang? props.search.lang:options[0]} 
        options={options} 
        className="select-lang" 
        width='170px' 
        styles={customStyles} 
        onChange={(e)=> optionSelect('lang',e)} />
    </div>
    <div className="option">Sort by 
      <Select defaultValue={props.search.sort? props.search.sort:sorts[0]} 
        options={sorts} 
        className="select-sort" 
        width='120px' 
        styles={customStyles} 
        onChange={(e)=> optionSelect('sort',e)} />
    </div>
    <div className="option">Order by 
      <Select defaultValue={props.search.order? props.search.order:orders[0]} 
        options={orders} 
        className="select-order" 
        width='100px' 
        styles={customStyles} 
        onChange={(e)=> optionSelect('order',e)} />
    </div>
  </div>);

};



export default SearchOptions;