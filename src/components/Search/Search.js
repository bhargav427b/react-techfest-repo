import React from 'react';
import './Search.scss';

const search = (props) => (
  <div className="searchbox col-6">
    <form className="form-inline">
      <i class="fa fa-search fa-lg" aria-hidden="true"></i>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
  </div>
);

export default search;