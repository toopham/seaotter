import React from 'react';

const PageNav = (props) => {

  //Options for pages 
  const options = [<option value="10" key='10'>10</option>, <option value="30" key='30'>30</option>, <option value="50" key='50'>50</option>]
  const pages = [];

  //Calculate total number of pages from results.
  //GitHub API only allow access to first 1000 results, therefore if results > 1000 then we only account for 1000 of those results.
  let totalPages = 1;
  if(props.search.total > 1000) totalPages = Math.ceil(1000/props.search.perpage);
  else totalPages = Math.ceil(props.search.total/props.search.perpage);

  //Generate the options for the possible pages to access from GitHub API
  for(let i = 1; i<= totalPages; i++){
    pages.push(<option value={i} key={i}>{i}</option>);
  }

  //Update page and per page state then update results by triggering GET_RESULTS
  const optionSelect = (e) =>{
    if(e.target.id=='page') props.updatePage(e.target.value);
    else if(e.target.id=='perpage') props.updatePerPage(e.target.value);

    props.getResults();
  };

  return <div className="options">
    <div className="option">Total: {props.search.total}</div>
    <div className="option">Items per page:  
          <select id='perpage' onChange={(e) => optionSelect(e)} defaultValue={30}>
					  {options}
					</select>
		</div>
    <div className="option">Page 
          <select id='page' onChange={(e) => optionSelect(e)}>
					  {pages}
					</select>
		</div>
  </div>;
};

export default PageNav;