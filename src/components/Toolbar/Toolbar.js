import React from 'react';
import './Toolbar.scss';
import Search from '../Search/Search';

const toolbar = (props) => (
  <section className="header row">
    <div className="header-logo col-3">E-Commerce
    <span className="header-logo-subtext">platform</span>
    </div>
    <Search></Search>
    <div className="header-icons col-3">
    <div className="header-icons-cart "><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></div>
      {/* <div className="header-icons-profile">profile</div> */}
      <div class="header-icons-profile"><i class="fa fa-caret-down"
        aria-hidden="true"></i><img class="header-icons-profile-image" alt="user"></img>
        </div>
    {/* <div class="header-icons-profile">Login</div> */}
    </div>
  </section>
);

export default toolbar;