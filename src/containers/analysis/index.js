import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setType,
  setKey
} from '../../modules/comments'

import AppInfo from './appinfo';

class Analysis extends React.Component {
  updateData = async (type, key) => {
    await this.props.setType(type);
    await this.props.setKey(key);
  }

  render() {
    return (
      <div>
        <div class="slim-mainpanel">
          <div class="container">
            <div class="card card-dash-chart-one mg-t-20 mg-sm-t-30">
              <div class="row no-gutters">
                <div class="col-lg-12">
                  <AppInfo updateData={this.updateData} />
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
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setType,
  setKey,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Analysis)
