import React from 'react';
import SearchBar from './SearchBar';
import Search from './Search';
import {Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

//mapState
const mapStateToProps = (state) => ({
  lang: state.search.lang,
  query: state.search.query,
  results: state.search.results,
});

//mapToDispatch
const mapDispatchToProps = (dispatch) => ({
  updateLang: (lang) => {
    dispatch(actions.updateLangActionCreator(lang));
  },
  updateSearch: (query) => {
    dispatch(actions.updateSearchActionCreator(query));
  },
  updateResults: (res) => {
    dispatch(actions.updateResultsActionCreator(res));
  }
});

const MainContainer = (props) => {

	return <div className="main">
    <SearchBar lang={props.lang} query={props.query} updateLang={props.updateLang} updateSearch={props.updateSearch} updateResults={props.updateResults}  />
    <Routes>
      <Route path="/search" element={<Search results={props.results} query={props.query} />} />
    </Routes>
  </div>;
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);