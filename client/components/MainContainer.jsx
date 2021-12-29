import React from 'react';
import SearchBar from './SearchBar';
import Search from './Search';
import {Routes, Route } from 'react-router-dom';
import { connect} from 'react-redux';
import * as actions from '../actions/actions';

//map redux state to props
const mapStateToProps = (state) => ({
  search: state.search,
});

//map redux actions to props
const mapDispatchToProps = (dispatch) => ({
  updateLang: (lang) => {
    dispatch(actions.updateLangActionCreator(lang));
  },
  updateSort: (sort) => {
    dispatch(actions.updateSortActionCreator(sort));
  },
  updateOrder: (order) => {
    dispatch(actions.updateOrderActionCreator(order));
  },
  updatePage: (page) => {
    dispatch(actions.updatePageActionCreator(page));
  },
  updatePerPage: (perpage) => {
    dispatch(actions.updatePerPageActionCreator(perpage));
  },
  updateSearch: (query) => {
    dispatch(actions.updateSearchActionCreator(query));
  },
  getResults: () => {
    dispatch(actions.getResultsActionCreator());
  }
});

const MainContainer = (props) => {

	return <div className="main">
    <Routes>
			<Route path="/" element={<SearchBar search={props.search} updateLang={props.updateLang} updateSort={props.updateSort} updateOrder={props.updateOrder} updateSearch={props.updateSearch} getResults={props.getResults}  />} />
      <Route path="/search" element={
      <Search results={props.results} 
        search={props.search} 
        updateLang={props.updateLang} 
        updateSort={props.updateSort} 
        updateOrder={props.updateOrder} 
        updateSearch={props.updateSearch} 
        updatePage={props.updatePage}
        updatePerPage={props.updatePerPage}
        getResults={props.getResults}/>} />
    </Routes>
  </div>;
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);