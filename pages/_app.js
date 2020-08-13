// impoting react stuff
import React from 'react';
import App from 'next/app';

// importing node modules
import fs from 'fs';
import path from 'path';

// importing FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// importing layout component
import Layout from '../layouts/LayoutDefault';

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

  static async getInitialProps(ctx){
    const basepath = path.join(process.cwd(), 'data');
    const filepath = path.join(basepath, 'layout.json');
    const layoutData = JSON.parse(fs.readFileSync(filepath, 'utf8'));

    return {
      layoutData
    }
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
    const layoutData = this.props.layoutData;

    return(
      <Layout data={layoutData} lang={state.language} langChange={this.langChange}>
        <Component {...pageProps} lang={state.language} />
      </Layout>
    )
  }
}

export default MyApp;