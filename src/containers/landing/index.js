import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

import Wizard from './wizard';

const Landing = props => (
  <div>
      <div class="slim-mainpanel">
        <div class="container">
          <div class="card card-dash-chart-one mg-t-20 mg-sm-t-30">
            <div class="row no-gutters">
              <div class="col-lg-12">
                <Wizard />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)
