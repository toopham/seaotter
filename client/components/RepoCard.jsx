import React from 'react';

const RepoCard = (props) => {

  //Helper Function to display date in format Month day, year
  const displayDate = (str) =>{
    const arr = str.split('-')
    const day = arr[2].split('T')[0];
    const month = ['Month', 'Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return month[Number(arr[1])]+' '+day+', '+arr[0];
  };

  //open new tab to github repo URL when clicked on RepoCard
  const openURL = (url) => {
    window.open(url, '_blank');
  };

  return (<div className="repo-card" onClick={() => openURL(props.repo.html_url)}>
    <div className="repo-stats">
      <div className="repo-info"><i className="bi bi-star-fill yellow"></i> Starred {props.repo.stargazers_count}</div>
      <div className="repo-info"><i className="bi bi-bezier"></i> Fork {props.repo.forks_count}</div>
      <div className="repo-info"><i className="bi bi-eye"></i> Watchers {props.repo.watchers_count}</div>
    </div>
    <ul>
      <li><b>User : </b> {props.repo.owner.login}</li>
      <li><b>URL : </b> {props.repo.html_url}</li>
      <li><b>Git Clone URL : </b> {props.repo.git_url}</li>
      <li><b>Language : </b> {props.repo.language}</li>
      <li><b>Created : </b> {displayDate(props.repo.created_at)}</li>
      <li><b>Last Update : </b> {displayDate(props.repo.updated_at)}</li>
      <li><b>Open Issues : </b> {props.repo.open_issues}</li>
      <li><b>Type : </b> {props.repo.private? 'Private':'Public'}</li>
    </ul>
  </div>);
};

export default RepoCard;