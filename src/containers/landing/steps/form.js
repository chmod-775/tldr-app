import React from 'react';
import Select from 'react-select';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  submitRequest = (e) => {
    this.props.submit(e);
  }

  render() {
    const { value } = this.state;
    const options = [
      {
        label: 'Apple App Store',
        value: 'Apple',
      },
      {
        label: 'Google Play Store',
        value: 'Google',
      },
      {
        label: 'Web URL',
        value: 'URL',
      },
    ]
    return (
      <div class="card">
        <div class="card-body">
          <label class="section-title">Comment Data Source</label>
          <p class="mg-b-20 mg-sm-b-40">Please select the data source associated with your comment and provide the corresponding ID</p>
            <div class="form-layout form-layout-6">
            <div class="row no-gutters">
              <div class="col-5 col-sm-4" style={{ border : '1px solid #ced4da' }}>
                App Type:
              </div>
              <div class="col-7 col-sm-8">
                <Select
                   name="form-control"
                   className="select2-container"
                   value={value}
                   onChange={this.handleChange}
                   options={options}
                 />
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-5 col-sm-4" style={{ border : '1px solid #ced4da' }}>
                App ID:
              </div>
              <div class="col-7 col-sm-8">
                <input class="form-control" type="text" placeholder="Enter the ID" />
              </div>
            </div>
          </div>
          <div class="mg-t-10">
            <a href="" onClick={this.submitRequest} class="btn btn-primary btn-block">Analyze Comments</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
