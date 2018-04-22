import React from 'react';

class AppInfo extends React.Component {

  render() {
    const { totalComments, positiveComments, negativeComments, selectedComments } = this.props.stats;
    
    return (
      <div class="card card-dash-one mg-t-20">
        <div class="row no-gutters">
          <div class="col-lg-3" id="sparkline4">
            <i class="icon ion-ios-analytics-outline"></i>
            <div class="dash-content">
              <label class="">Total Comments</label>
              <h2>{totalComments}</h2>
            </div>
          </div>
          <div class="col-lg-3">
            <i class="icon ion-ios-pie-outline"></i>
            <div class="dash-content">
              <label class="tx-success">Positive Comments</label>
              <h2>{positiveComments}</h2>
            </div>
          </div>
          <div class="col-lg-3">
            <i class="icon ion-ios-stopwatch-outline"></i>
            <div class="dash-content">
              <label class="tx-danger">Negative Comments</label>
              <h2>{negativeComments}</h2>
            </div>
          </div>
          <div class="col-lg-3">
            <i class="icon ion-ios-world-outline"></i>
            <div class="dash-content">
              <label class="tx-primary">Filtered Comments</label>
              <h2>{selectedComments}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppInfo;
