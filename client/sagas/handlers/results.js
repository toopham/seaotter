import "regenerator-runtime/runtime";
import { call, put, select } from 'redux-saga/effects';
import { requestGetResults } from '../requests/search';
import { setResultsActionCreator, setTotalsActionCreator, setErrorActionCreator } from '../../actions/actions';

//Handler to call GitHub API when GET_RESULTS event is triggered
export function* handleGetResults(action) {
  try {
    //get state from redux store
    const state = yield select();

    //get params for GET request to GitHub API
    const body = {query: state.search.query, 
      lang: state.search.lang, 
      sort: state.search.sort, 
      order: state.search.order, 
      page: state.search.page,
    perpage: state.search.perpage};

    //get API call to GitHub through requestGetResults passing in params body
    const response = yield call(requestGetResults, body);

    //destructure the response to retrieve data
    const { data } = response;

    //update total count of results
    yield put(setTotalsActionCreator(data.total_count));

    //update search results
    yield put(setResultsActionCreator(data.items));
  } catch (error) {
    yield put(setErrorActionCreator(error.message));
    console.log('ERROR : ', error);
  }
};