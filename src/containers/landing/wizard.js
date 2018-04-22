import React from 'react';

import Start from './steps/start';
import Form from './steps/form';
import Pending from './steps/pending';

class Wizard extends React.Component {
  constructor() {
    super();
    this.state = {
      currentState: 'start',
    };
  }

  goToNextState = (type, key) => {
    const { currentState } = this.state;
    if (currentState === 'start') {
      this.setState({ currentState: 'form' });
    } else if (currentState === 'form') {
      // change state
      this.setState({ currentState: 'pending' }, async () => {
        // Bug: updating redux here causes the component to rerender twice (and not navigate!)
        // this.props.updateData(type, key);
        // send request and wait
        const success = await this.props.getAnalysis(type, key);
        // if no success, go to error page
        if (!success) {
          console.log("go to error page!");
        }
      });
    } else {
      this.setState({ currentState: 'start' });
    }
  }

  getState = () => {
    const { currentState } = this.state;
    switch (currentState) {
      case 'form':
        return <Form submit={this.goToNextState} />;
      case 'pending':
        return <Pending />;
      case 'start':
      return <Start submit={this.goToNextState}/>;
      default:
        return null;
    }
  }

  updateData = (type, key) => {
    this.props.updateData(type, key);
  }

  render() {
    // const state = this.getState();
    const { currentState } = this.state;
    return (
      <div class="section-wrapper">
        { currentState === "start" ? <Start submit={this.goToNextState}/> : null }
        { currentState === "pending" ? <Pending /> : null }
        { currentState === "form" ? <Form submit={this.goToNextState} /> : null }
      </div>
    );
  }
}

export default Wizard;
