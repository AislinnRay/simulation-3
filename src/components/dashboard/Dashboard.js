import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import searchIcon from '../../images/search_icon.png';
import './styleDash.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      myPosts: true,
      posts: [],
      loading: true
    }
  }

  // componentDidMount() {
  //   this.grabPosts();
  // }

  // grabPosts = () => {
  //   let { search, myPosts } = this.state;
  //   let url = `/api/posts/${this.props.userId}`;
  //   if (myPosts && !search) {
  //     url += '?mine=true';
  //   } else if (!myPosts && search) {
  //     url += `?search=${search}`;
  //   } else if (myPosts && search) {
  //     url += `?mine=true&search=${search}`;
  //   }
  //   axios.get(url)
  //     .then(res => {
  //       // setTimeout(_ => this.setState({ posts: res.data, loading: false }), 500)
  //       this.setState({ posts: res.data, loading: false },
  //         console.log("dash res.data", res.data))
  //     }).catch((err) => {
  //       console.log(err);
  //     })
  // }

  // reset = () => {
  //   let { myPosts } = this.state;
  //   let url = `/api/posts/${this.props.userId}`;
  //   if (myPosts) {
  //     url += '?mine=true';
  //   }
  //   axios.get(url)
  //     .then(res => {
  //       this.setState({ posts: res.data, loading: false, search: '' })
  //     })
  // }
  render() {
    let posts = this.state.posts.map((element) => {
      console.log("dash el.post_id", element.post_id)
      return <Link to={`/api/posts/${element.post_id}`} key={element.post_id}>
        <div className='content-box dash-post-box'>
          <h3>{element.title}</h3>
          <div className='author-box'>
            <p>by {element.author_username}</p>
            <img src={element.profilePic} alt='author' />
          </div>
        </div>
      </Link>
    })
    return (
      <div className='Dashboard'>
        <div className='content-box dash-filter'>
          {/* <div className='dash-search-box'>
            <input value={this.state.search} onChange={e => this.setState({ search: e.target.value })} className='dash-search-bar' placeholder='Search by Title' />
            <img onClick={this.grabPosts} className='dash-search-button' src={searchIcon} alt='search' />
            <button onClick={this.reset} className='auth-button' id='dash-reset'>Reset</button>
          </div> */}
          <div className='dash-check-box'>
            <p>My Posts</p>
            {/* <input checked={this.state.myPosts} onChange={_ => this.setState({ myPosts: !this.state.myPosts }, this.grabPosts)} type='checkbox' /> */}
          </div>
        </div>
        {/* <div className='content-box dash-posts-container'>
          {!this.state.loading
            ?
            posts
            :
            <div className='load-box'>
              <div className='load-background'></div>
              <div className='load'></div>
            </div>
          }
        </div> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userId: state.userId
  }
}
export default connect(mapStateToProps)(Dashboard);