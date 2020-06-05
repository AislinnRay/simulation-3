import React, { Component } from 'react';
import axios from 'axios';

import noImage from '../../images/noImage.png';
import './stylePost.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      author_pic: '',
      title: '',
      img: '',
      content: '',
      loading: true
    }
  }
  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.id}`)
      .then(res => {
        setTimeout(_ => this.setState({ ...res.data, loading: false }), 500)
      })
  }
  render() {
    let imgSrc = this.state.img ? this.state.img : noImage;
    return (
      <div className='Post content_box'>
        {!this.state.loading && this.state.title
          ?
          <div>
            <div className='post-header'>
              <h2 className='title'>{this.state.title}</h2>
              <div className='author-box'>
                <p>by {this.state.author}</p>
                <img src={this.state.author_pic} alt='author' />
              </div>
            </div>
            <div className='post-content-box'>
              <div className='post-img' style={{ backgroundImage: `url('${imgSrc}') ` }} alt='post' ></div>
              <p>{this.state.content}</p>
            </div>
          </div>
          :
          !this.state.loading
            ?
            <div className='oops-box'>
              <h2 className='title'>Oops!</h2>
              <p>Looks like this post doesn't exist anymore</p>
            </div>
            :
            <div className='load-box'>
              <div className='load-background'></div>
              <div className='load'></div>
            </div>
        }
      </div>
    )
  }
}

export default Post;