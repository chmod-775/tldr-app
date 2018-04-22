import React from 'react';

class Pending extends React.Component {
  render() {
    return (
      <div class="card card-info">
        <div class="card-body">
          <label class="section-title">Analyzing Comments</label>
          <p class="mg-b-20 mg-sm-b-40">We are analyzing the comments...</p>
            <div class="d-flex ht-100 pos-relative align-items-center">
              <div class="sk-chasing-dots">
                <div class="sk-child sk-dot1 bg-gray-800"></div>
                <div class="sk-child sk-dot2 bg-gray-800"></div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Pending;
