// TODO:
// HANDLE SUBMIT TO STATIC_EMAIL
// IMPLEMENT CAPTCHA

// importing modules
import React, { Component } from 'react';

// defining class component
class Contact_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    // binding handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(st => (
      {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    ))
    //handle submit, create the post request to staticmail...
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const data = this.props.data,
      fields = this.props.data.fields;

    return (
      <section className='Contact_form col-6'>
        <div className='content row'>
          <form className='col mx-4 my-4 px-5 py-4 bg-primary rounded' onSubmit={this.handleSubmit}>
            {
              Object.keys(fields).map((key, i) => {
                let id = fields[key].id,
                  label = fields[key].label,
                  placeholder = fields[key].placeholder;
                return (
                  <div className='form-group' key={i}>
                    <label className='text-secondary font-weight-bold' htmlFor={id}>{label + ":"}</label>
                    <input className='form-control' type='text' id={id} name={id} placeholder={placeholder} value={this.state[id]} onChange={this.handleChange} />
                  </div>
                )
              })
            }
            <div className='form-group'>
              <label className='text-secondary font-weight-bold' htmlFor={data.message.id}>{data.message.label + ":"}</label>
              <textarea rows="7" className='form-control' type='text' id={data.message.id} name={data.message.id} placeholder={data.message.placeholder} value={this.state[data.message.id]} onChange={this.handleChange} />
            </div>
            <div className='text-center'>
              <button className='btn btn-secondary btn-lg w-100' type='submit'>{data.button.text}</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

// exporting component
export default Contact_form