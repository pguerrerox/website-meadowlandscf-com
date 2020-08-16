// class component to use state

// importing modules
import React, {Component} from 'react';

// defining class component
class Contact_form extends Component{
  constructor(props){
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

  handleSubmit(e){
    e.preventDefault();
    this.setState( st => (
      {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    ))
    //handle submit, create the post request to staticmail...
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const data = this.props.data,
          fields = this.props.data.fields;

    return (
      <>
      <section className='Contact_form'>
        <div className='content'>
          <form onSubmit={this.handleSubmit}>
            {
              Object.keys(fields).map((key) => {
                let id = fields[key].id,
                    label = fields[key].label,
                    placeholder = fields[key].placeholder;

                return(
                  <>
                  <label htmlFor={id}>{label+":"}</label>
                  <input type='text' id={id} name={id} placeholder={placeholder} value={this.state[id]} onChange={this.handleChange} />
                  </>
                )
              })
            }
            <button type='submit'>{data.button.text}</button>
          </form>
        </div>
      </section>
      </>
    )
  }
}

// exporting component
export default Contact_form