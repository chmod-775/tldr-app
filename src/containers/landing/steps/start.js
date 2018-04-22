import React from 'react';

class Start extends React.Component {
  render() {
    return (
      <div class="card card-info">
        <div class="card-body pd-40">
          <div class="d-flex justify-content-center mg-b-30">
            <img src="../img/icon2.svg" class="wd-100" alt=""/>
          </div>
          <h5 class="tx-inverse mg-b-20">Welcome to tldr</h5>
          <p>Trying to understand thousands of comments, but don't have the time? tldr has got your back. Using natural language processing and sentiment analysis, tldr can help to simplify a lot of comments down into a bite-sized analysis you can quickly use.</p>
          <a href='' onClick={this.props.submit} class="btn btn-primary btn-block">Get Started</a>
        </div>
      </div>
    );
  }
}

export default Start;
