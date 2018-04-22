import React from 'react';
import Range from 'rc-slider/lib/Range';

class AppInfo extends React.Component {

  toggleCheckbox = (type) => {
    if (type === 'positive'){
      this.props.updateOption('showPositive', !this.props.options.showPositive);
    } else {
      this.props.updateOption('showNegative', !this.props.options.showNegative);
    }
  }

  handlePosChange = (props) => {
    console.log(props);
    if (props.className === "rc-slider-handle rc-slider-handle-1") {
      if( props.value !==  this.props.options.posLow){
        this.props.updateOption('posLow', props.value);
      }
    }
    if (props.className === "rc-slider-handle rc-slider-handle-2") {
      if( props.value !==  this.props.options.posLow){
        this.props.updateOption('posHigh', props.value);
      }
    }
  }

  handleNegChange = (props) => {
    // console.log(props);
    if (props.className === "rc-slider-handle rc-slider-handle-1") {
      if( props.value !==  this.props.options.negLow){
        this.props.updateOption('negLow', props.value);
      }
    }
    if (props.className === "rc-slider-handle rc-slider-handle-2") {
      if( props.value !==   this.props.options.negHigh){
        this.props.updateOption('negHigh', props.value);
      }
    }
  }


  render() {
  const {
    showPositive,
    showNegative,
    posHigh,
    posLow,
    negHigh,
    negLow,
  } = this.props.options;

    return (
      <div class="col-lg-6">
        <div class="section-wrapper mg-t-20">
          <label class="section-title">Sentiment Value Controls</label>
          <p class="mg-b-20 mg-sm-b-40">Manipulating these values change the comments that show below </p>

            <div class="form-layout form-layout-6">
                <div class="row no-gutters">
                  <div class="col-4 col-sm-3">
                    Positive Range:
                  </div>
                  <div class="col-6 col-sm-7">
                    <Range className="high" min={0} max={100} value={[posLow, posHigh]} tipFormatter={value => `${value}%`} />
                  </div>
                  <div class="col-2 col-sm-2">
                    <label class="ckbox">
                      <input type="checkbox" checked={showPositive} onChange={this.toggleCheckbox.bind(this, 'positive')}/><span></span>
                    </label>
                  </div>
                </div>
                <div class="row no-gutters">
                  <div class="col-4 col-sm-3">
                    Negative Range:
                  </div>
                  <div class="col-6 col-sm-7">
                    <Range min={0} max={100} defaultValue={[negLow, negHigh]} tipFormatter={value => `${value}%`} />
                  </div>
                  <div class="col-2 col-sm-2">
                    <label class="ckbox">
                      <input type="checkbox" checked={showNegative} onChange={this.toggleCheckbox.bind(this, 'negative')}/><span></span>
                    </label>
                  </div>
                </div>
              </div>
          </div>
        </div>

    );
  }
}

export default AppInfo;
