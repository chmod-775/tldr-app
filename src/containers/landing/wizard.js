import React from 'react';
import StepZilla from 'react-stepzilla';

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

  goToNextState = (e) => {
    if (e) {
      e.preventDefault();
    }
    const { currentState } = this.state;
    if (currentState === 'start') {
      this.setState({ currentState: 'form' });
    } else if (currentState === 'form') {
      this.setState({ currentState: 'pending' });
    } else {
      this.setState({ currentState: 'start' });
    }
  }

  getState = () => {
    const { currentState } = this.state;
    switch (currentState) {
      case 'form':
        return <Form submit={this.goToNextState}/>;
      case 'pending':
        return <Pending />;
      case 'start':
      default:
        return <Start submit={this.goToNextState}/>;
    }
  }

  render() {
    return (
      <div class="section-wrapper">
        { this.getState() }
      </div>
    );
  }
}


export default Wizard;

// <label class="section-title">Equal Width Step Indicator</label>
// <p class="mg-b-20 mg-sm-b-40">A basic wizard that adds a custom style to make the step indicator equal width.</p>
// <div id="wizard" role="application" class="wizard wizard-style-1 step-equal-width clearfix">
//   <div class="steps clearfix">
//     <ul role="tablist">
//       <li role="tab" class="first current" aria-disabled="false" aria-selected="true"><a id="wizard4-t-0" href="#wizard4-h-0" aria-controls="wizard4-p-0"><span class="current-info audible"></span><span class="number">1</span> <span class="title">Personal Information</span></a></li>
//       <li role="tab" class="disabled" aria-disabled="true"><a id="wizard4-t-1" href="#wizard4-h-1" aria-controls="wizard4-p-1"><span class="number">2</span> <span class="title">Billing Information</span></a></li>
//       <li role="tab" class="disabled last" aria-disabled="true"><a id="wizard4-t-2" href="#wizard4-h-2" aria-controls="wizard4-p-2"><span class="number">3</span> <span class="title">Payment Details</span></a></li>
//     </ul>
//   </div>
//   <div class="content clearfix">
//     <h3 id="wizard4-h-0" tabindex="-1" class="title current">Personal Information</h3>
//     <section id="wizard4-p-0" role="tabpanel" aria-labelledby="wizard4-h-0" class="body current" aria-hidden="false">
//       <p>Try the keyboard navigation by clicking arrow left or right!</p>
//     </section>
//     <h3 id="wizard4-h-1" tabindex="-1" class="title">Billing Information</h3>
//     <section id="wizard4-p-1" role="tabpanel" aria-labelledby="wizard4-h-1" class="body" aria-hidden="true" style={{ display: "none" }}>
//       <p>Wonderful transition effects.</p>
//     </section>
//     <h3 id="wizard4-h-2" tabindex="-1" class="title">Payment Details</h3>
//     <section id="wizard4-p-2" role="tabpanel" aria-labelledby="wizard4-h-2" class="body" aria-hidden="true" style={{display: "none" }}>
//       <p>The next and previous buttons help you to navigate through your content.</p>
//     </section>
//   </div>
//   <div class="actions clearfix">
//     <ul role="menu" aria-label="Pagination">
//       <li class="disabled" aria-disabled="true"><a href="#previous" role="menuitem">Previous</a></li>
//       <li aria-hidden="false" aria-disabled="false"><a href="#next" role="menuitem">Next</a></li>
//       <li aria-hidden="true" style={{display: "none"}}><a href="#finish" role="menuitem">Finish</a></li>
//     </ul>
//   </div>
// </div>
