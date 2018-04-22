import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setType,
  setKey
} from '../../modules/comments'

import AppInfo from './appinfo/index.js';
import Comments from './comments';

class Analysis extends React.Component {
  constructor(){
    super();
    this.state = {
      options: {
        showPositive: true,
        showNegative: false,
        posHigh: 100,
        posLow: 80,
        negHigh: 20,
        negLow: 0,
      },
    }
  }

  updateData = async (type, key) => {
    await this.props.setType(type);
    await this.props.setKey(key);
  }

  updateOptions= (options) => {
    this.setState({ options })
  }

  render() {
    const { app } = this.props;
    const comments = filterComments(this.state.options, app.comments);
    return (
      <div class="slim-mainpanel">
        <div class="container pd-t-50">
          <AppInfo updateData={this.updateData} app={app} updateOptions={this.updateOptions}/>
          <Comments comments={comments}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  app: state.comments.app,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setType,
  setKey,
  changePage: () => push('/about-us'),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analysis)


function filterComments(options, comments) {
  let positiveComments = [];
  let negativeComments = [];
  if (options.showPositive) {
    positiveComments = comments.filter((comment) => {
      const sentiment = comment.sentiment * 100;
      const low = options.posLow;
      const high = options.posHigh;
      return (sentiment >= low) && (sentiment <= high);
    })
  }
  if (options.showNegative) {
    negativeComments = comments.filter((comment) => {
      const sentiment = comment.sentiment * 100;
      const low = options.negLow;
      const high = options.negHigh;
      return (sentiment >= low) && (sentiment <= high);
    })
  }
  return [ ...positiveComments, ...negativeComments];
}
