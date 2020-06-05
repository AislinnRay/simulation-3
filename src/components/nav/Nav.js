import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { logoutUser } from '../../redux/reducer';
import homeIcon from '../../images/home_icon.png';
import logoutIcon from '../../images/logout_icon.png';
import addIcon from '../../images/add_icon.png';

function Nav(props){
    if (props.location.pathname !== '/'){
        return (
        <div className='Nav'>
            <div className='nav-profile-container'>
             <div className='nav-profile-pic' style={{ backgroundImage: `url('${props.profilePic}')` }}></div>
             <p>{props.username}</p>
            </div>
        <div className='nav-links'>
          <Link to='/dashboard'>
              <img className='nav-img' src={homeIcon} alt='home' />
            </Link>
          <Link to='/new'>
              <img className='nav-img' src={addIcon} alt='new post' />
            </Link>
        </div>
        <Link to='/' onClick={props.logoutUser}>
            <img className='nav_img logout' src={logoutIcon} alt='logout' />
            </Link>
      </div>
        )
    } else {
        return null
    }
}

const mapStateToProps = state => state
export default withRouter(connect(mapStateToProps, {logoutUser})(Nav));