import React from 'react';
import './block.css';

class AppInfo extends React.Component {

  render() {
    const {title, description, keywords } = this.props;

    return (
      <div class="col-lg-6">
        <h3 class="tx-inverse mg-b-15">{title}</h3>
        <p class="mg-b-40">{description}</p>
          <ul class="list-group">
            {
              Object.keys(keywords).map((keyword) => {
                return (
                  <li class="list-group-item">
                    <p class="mg-b-0"><i class="fa fa-check tx-success mg-r-8"></i><strong class="tx-inverse tx-medium">{keyword}</strong>  <span class="text-muted">{keywords[keyword]}</span></p>
                  </li>
                );
              })
            }
          </ul>
      </div>
    );
  }
}

export default AppInfo;
