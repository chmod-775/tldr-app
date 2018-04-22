import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setType, setKey } from '../../modules/comments';

import * as request from '../../modules/request';

import Wizard from './wizard';

class Landing extends React.Component {
  updateData = async (type, key) => {
    await this.props.setType(type);
    await this.props.setKey(key);
  }

  getAnalysis = async (type, key) => {
    // const { type, key } = this.props;  // removed because of bug
    console.log(this.props);
    // send request and wait
    const response = await request.getMockData(type, key);
    console.log("here");
    console.log(response);
    // if good request, change to analysis page
    if (true) {
      this.props.loadAnalysis();
      return true;
    } else {
      // else go to error page
      return false;

    }
  }

  render() {
    return (
      <div>
        <div class="slim-mainpanel">
          <div class="container">
            <div class="card card-dash-chart-one mg-t-20 mg-sm-t-30">
              <div class="row no-gutters">
                <div class="col-lg-12">
                  <Wizard updateData={this.updateData} getAnalysis={this.getAnalysis}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  type: state.comments.type,
  key: state.comments.key,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setType,
  setKey,
  loadAnalysis: () => push('/analysis')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
