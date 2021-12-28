import React from 'react';

const RepoCard = (props) => {

  return (<div className="repo-card">
    <ul>
      <li><b>URL : </b> {props.repo.html_url}</li>
      <li><b>Git Clone URL : </b> {props.repo.git_url}</li>
      <li><b>User : </b> {props.repo.owner.login}</li>
    </ul>
  </div>);
};

export default RepoCard;