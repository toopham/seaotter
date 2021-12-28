import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import Search from './Search';
import {Routes, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
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
  getResults: () => {
    dispatch(actions.getResultsActionCreator());
  }
});

const MainContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getResultsActionCreator());
  }, []);

	return <div className="main">
    <Routes>
			<Route path="/" element={<SearchBar lang={props.lang} query={props.query} updateLang={props.updateLang} updateSearch={props.updateSearch} updateResults={props.updateResults} getResults={props.getResults}  />} />
      <Route path="/search" element={<Search results={props.results} query={props.query} />} />
    </Routes>
  </div>;
};


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);