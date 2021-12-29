import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Select from 'react-select';

import Error from '../client/components/Error';
import Footer from '../client/components/Footer';
import Header from '../client/components/Header';
import MainContainer from '../client/components/MainContainer';
import PageNav from '../client/components/PageNav';
import RepoCard from '../client/components/RepoCard';
import Search from '../client/components/Search';
import SearchBar from '../client/components/SearchBar';
import SearchOptions from '../client/components/SearchOptions';


import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Error component', () => {
    let wrapper;
    const props = {
      error: '404 Error',
    };

    beforeAll(() => {
      wrapper = shallow(<Error {...props} />);
    });

    it('Renders a <div> tag with h3 and p', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('p').text()).toEqual('404 Error');
      expect(wrapper.find('h3').text()).toEqual('Cannot Connect to GitHub API');
    });
  });

	describe('Footer component', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Footer />);
    });

    it('Renders a <div> tag with h3 and p', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('p').text()).toEqual('This is an app to search for GitHub projects');
      expect(wrapper.find('h3').text()).toEqual('Author: Tu Pham');
    });
  });

	describe('Header component', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Header />);
    });

    it('Renders a <div> tag with h1', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find({ className: 'header' }).children()).toHaveLength(1);
      expect(wrapper.find('h1').text()).toEqual('Sea Otter Application');
    });
  });

	describe('PageNav component', () => {
    let wrapper;
		const props = {
			search: {error: '404', query: 'seaotter', results: [{html_url: 'myurl1', repo: 'a'},{html_url: 'myurl2', repo: 'b'}]},
			updatePage: jest.fn(() => 'update page'),
			updatePerPage: jest.fn(() => 'update perpage'),
			getResults: jest.fn(() => 'get results'),
    };

    beforeAll(() => {
      wrapper = shallow(<PageNav {...props} />);
    });

    it('Renders a <div> wrapper', () => {
      expect(wrapper.type()).toEqual('div');
		});

		it('Renders a div of className options with 3 children elements', () => {
      expect(wrapper.find({ className: 'options' }).children()).toHaveLength(3);
		});
		it('Renders 3 div elements with className option', () => {
			expect(wrapper.find({ className: 'option' })).toHaveLength(3);
		});
		it('Renders 2 select with id page and perpage', () => {
      expect(wrapper.find({id: 'page'}).type()).toEqual('select');
			expect(wrapper.find({id: 'perpage'}).type()).toEqual('select');
    });
  });

	describe('RepoCard component', () => {
    let wrapper;
		const props = {
			repo: {html_url: 'url',
				git_url: 'giturl',
				stargazers_count: 10,
				forks_count: 9,
				watchers_count: 8,
				owner: {login: 'tupham'},
				language: 'en',
				created_at: '2022-01-01',
				updated_at: '2022-01-02',
				open_issues: 99,
				private: false,
			}
		}

    beforeAll(() => {
      wrapper = shallow(<RepoCard {...props}/>);
    });

    it('Renders a <div> tag with 2 children, a div and a ul', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find({ className: 'repo-card' }).children()).toHaveLength(2);
		});

		it('Renders div with className repo-stats tag with 3 children ', () => {
			expect(wrapper.find({ className: 'repo-stats' }).children()).toHaveLength(3);
		});

		it('Renders a 3 <div> tag with className repo-info', () => {
			expect(wrapper.find({ className: 'repo-info' })).toHaveLength(3);
		});

		it('Renders a <ul> tag with 8 li children', () => {
      expect(wrapper.find('ul').children()).toHaveLength(8);
			expect(wrapper.find('li')).toHaveLength(8);
    });
  });

	describe('MainContainer component with Router and Provider', () => {
    let wrapper;
		let store;

    beforeAll(() => {
			store = mockStore({ search: {query: '', 
			lang: 'any', 
			sort: 'stars', 
			order: 'desc', 
			page: 1, 
			perpage: 30, 
			results: [], 
			total: 0, 
			error: ''} });

      wrapper = mount(<Provider store={store}><Router><MainContainer /></Router></Provider>);

    });

    it('Renders a redux connected component MainContainer with Routes', () => {
      expect(wrapper.length).toEqual(1);
		});
		it('Renders a SearchBar component', () => {
			expect(wrapper.find(SearchBar)).toHaveLength(1);
		});
		it('Renders a <div> wrapper with className main', () => {
			expect(wrapper.find({className: 'main'})).toHaveLength(1);
			expect(wrapper.find({className: 'main'}).type()).toEqual('div');
    });

  });


	describe('Search component', () => {
    let wrapper;
    const props = {
			search: {error: '404', query: 'seaotter', results: [{html_url: 'myurl1', repo: 'a'},{html_url: 'myurl2', repo: 'b'}]},
			updateLang: jest.fn(() => 'update lang'),
			updateSort: jest.fn(() => 'update sort'),
			updateOrder: jest.fn(() => 'update order'),
			updateSearch: jest.fn(() => 'update search'),
			updatePage: jest.fn(() => 'update page'),
			updatePerPage: jest.fn(() => 'update perpage'),
			getResults: jest.fn(() => 'get results'),
    };

    beforeAll(() => {
      wrapper = shallow(<Search {...props} />);
    });


    it('Render SearchBar component', () => {
      expect(wrapper.find(SearchBar)).toHaveLength(1); 
      expect(wrapper.find({ path: 'search'}).text()).toEqual('<SearchBar />');
    });

		it('Render PageNav component', () => {
      expect(wrapper.find(PageNav)).toHaveLength(1); 
    });

		it('Render 2 RepoCard components', () => {
      expect(wrapper.find(RepoCard)).toHaveLength(2); 
    });

    it('Render a <div> tag with h2 element', () => {
      expect(wrapper.find({ className: 'search-results' }).type()).toEqual('div');
      expect(wrapper.find({ className: 'box-info'}).children()).toHaveLength(2);
      expect(wrapper.find({ className: 'box-info'}).text()).toEqual('Results:seaotter');
      expect(wrapper.find({ className: 'box-inner'}).text()).toEqual('seaotter');
    });

  });

	describe('SearchBar component', () => {
    let wrapper;
    const props = {
      path: 'search',
			search: {error: '404', query: 'seaotter', results: [{html_url: 'myurl1', repo: 'a'},{html_url: 'myurl2', repo: 'b'}]},
			updateLang: jest.fn(() => 'update lang'),
			updateSort: jest.fn(() => 'update sort'),
			updateOrder: jest.fn(() => 'update order'),
			updateSearch: jest.fn(() => 'update search'),
			getResults: jest.fn(() => 'get results'),
    };

    beforeAll(() => {
      wrapper = mount(<Router><SearchBar {...props} /></Router>);
			wrapper = wrapper.find(SearchBar);
    });


    it('Render a div wrapper of className search-bar with 3 children', () => {
      expect(wrapper.find({ className: 'search-bar'})).toHaveLength(1);
			expect(wrapper.find({ className: 'search-bar'}).children()).toHaveLength(3);
    });

		it('Render h2 header', () => {
      expect(wrapper.find('h2').text()).toEqual('Seach GitHub Projects'); 
    });

    it('Render search-input', () => {
      expect(wrapper.find({ id: 'search-input'})).toHaveLength(1);
    });

    it('Render search button', () => {
      expect(wrapper.find('button')).toHaveLength(1); 
      expect(wrapper.find({id: 'search'}).type()).toEqual('button'); 
    });

    it('Render SearchOptions component', () => {
      expect(wrapper.find(SearchOptions)).toHaveLength(1); 
    });

  });

  describe('SearchOptions component', () => {
    let wrapper;
    const props = {
      search: {error: '404', query: 'seaotter', results: [{html_url: 'myurl1', repo: 'a'},{html_url: 'myurl2', repo: 'b'}]},
      path: 'search',
      updateLang: jest.fn((e) => 'update lang'),
      updateSort: jest.fn((e) => 'update sort'),
      updateOrder: jest.fn((e) => 'update order'),
      getResults: jest.fn((e) => 'get results'),
    };

    beforeAll(() => {
      wrapper = shallow(<SearchOptions {...props} />);
    });

		it('Render a div tag className options with 3 children', () => {
      expect(wrapper.find({className: 'options'})).toHaveLength(1); 
			expect(wrapper.find({className: 'options'}).children()).toHaveLength(3);
			expect(wrapper.find({className: 'option'})).toHaveLength(3); 
    });

    it('Render 3 Select components', () => {
      expect(wrapper.find(Select)).toHaveLength(3); 
      expect(wrapper.find({ className: 'select-lang' })).toHaveLength(1);
      expect(wrapper.find({ className: 'select-sort' })).toHaveLength(1);
      expect(wrapper.find({ className: 'select-order' })).toHaveLength(1);
    });


  });
});