import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import noImage from '../../images/noImage.png';
import './styleForm.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      content: ''
    };
    this.submit = this.submit.bind(this);
  }
  submit() {
    if (this.props.userId) {
      axios.post(`/api/posts/${this.props.userId}`, this.state)
        .then(res => this.props.history.push('/dashboard'))
    } else {
      alert('You must log in to create posts')
    }
  }
  render() {
    let imgSrc = this.state.img ? this.state.img : noImage;
    return (
      <div className='Form content-box'>
        <h2 className='title'>New Post</h2>
        <div className='form-input-box'>
          <p>Title:</p>
          <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
        </div>
        <div className='form-img-prev' style={{ backgroundImage: `url('${imgSrc}')` }} alt='preview' ></div>
        <div className='form-input-box'>
          <p>Image URL:</p>
          <input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />
        </div>
        <div className='form-text-box'>
          <p>Content:</p>
          <textarea value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
        </div>
        <button onClick={this.submit} className='dark-button form-button'>Post</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user_id: state.userId
  }
}
export default connect(mapStateToProps)(Form);