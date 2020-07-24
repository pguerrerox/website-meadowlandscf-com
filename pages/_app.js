// impoting react stuff
import React from 'react';
import App from 'next/app';

// importing FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

class MyApp extends App{
  constructor(props){
    super(props)
    this.state = {
      language: "en"
    }

    // binding
    this.langChange = this.langChange.bind(this)
  }

  langChange(){
    return this.setState( state => (
      state.language === "en" 
      ? {language: "es"} 
      : {language: "en"}
    ))
  }

  render(){
    const {Component, pageProps} = this.props;
    const state = this.state;

    return(
      <Component {...pageProps} lang={state.language} langChange={this.langChange} />
    )
  }
}

export default MyApp;