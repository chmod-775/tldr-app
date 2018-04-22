import React from 'react';
import Data from './data';
import Controls from './controls';
import Stats from './stats';

class AppInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      options: {
        showPositive: true,
        showNegative: false,
        posHigh: 100,
        posLow: 80,
        negHigh: 20,
        negLow: 0,
      }
    };
  }

  updateOption = (key, value) => {
    const options = {...this.state.options, [key]: value };
    this.setState({ options });
    this.props.updateOptions(options);
  }

  render() {
    const { title, description, comments, ranked_entities } = this.props.app;
    const stats = getStats(this.state.options, comments);

    return (
      <div>
        <div class="dash-headline" style={{ height: 'auto' }}>
          <Data title={title} description={description} keywords={ranked_entities}/>
          <Controls options={this.state.options} updateOption={this.updateOption.bind(this)}/>
        </div>
        <Stats stats={stats}/>
      </div>
    );
  }
}

export default AppInfo;


function getStats(data) {
  // total comments
  // Positive comments
  // negative comments
  // selected comments
  return {
    totalComments: 3,
    positiveComments: 1,
    negativeComments: 2,
    selectedComments: 2,
  };
}


function getStats(options, comments) {
  let positiveComments = [];
  let negativeComments = [];
  positiveComments = comments.filter((comment) => {
    const sentiment = comment.sentiment * 100;
    const low = options.posLow;
    const high = options.posHigh;
    return (sentiment >= low) && (sentiment <= high);
  })
  negativeComments = comments.filter((comment) => {
    const sentiment = comment.sentiment * 100;
    const low = options.negLow;
    const high = options.negHigh;
    return (sentiment >= low) && (sentiment <= high);
  })

  let numSelected = 0
  if (options.showPositive) {
    numSelected += positiveComments.length;
  }
  if (options.showNegative) {
    numSelected += negativeComments.length;
  }
  return {
    totalComments: comments.length,
    positiveComments: positiveComments.length,
    negativeComments: negativeComments.length,
    selectedComments: numSelected,
  };
}
