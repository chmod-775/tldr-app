import React from 'react';

class AppInfo extends React.Component {

  render() {
    return (
      <div class="row">
          <div class="col-lg-6">
            <h3 class="tx-inverse mg-b-15">Welcome back, Katherine!</h3>
            <p class="mg-b-40">Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>

            <h6 class="slim-card-title mg-b-15">Your Earning Summary</h6>
            <div class="row no-gutters">
              <div class="col-sm-6">
                <div class="card card-earning-summary">
                  <h6>Today's Earnings</h6>
                  <h1>$950</h1>
                  <span>Based on list price</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card card-earning-summary mg-sm-l--1 bd-t-0 bd-sm-t">
                  <h6>This Week's Earnings</h6>
                  <h1>$12,420</h1>
                  <span>Based on list price</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mg-t-20 mg-sm-t-30 mg-lg-t-0">
            <div class="card card-dash-headline">
              <h4>Introducing the responsive admin dashboard template made with Bootstrap 4</h4>
              <p>Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus...</p>
              <div class="row row-sm">
                <div class="col-sm-6">
                  <a href="" class="btn btn-primary btn-block">Account Settings</a>
                </div>
                <div class="col-sm-6 mg-t-10 mg-sm-t-0">
                  <a href="" class="btn btn-success btn-block">Upgrade Account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default AppInfo;
