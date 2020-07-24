// importing react stuff
import React, {Component} from 'react';

// importing components
import HeaderTop from './header/HeaderTop';
import HeaderNavbar from './header/HeaderNavbar';
import HeaderDown from './header/HeaderDown';

// exporting component
export default function Header(props){
  return(
    <>
    {/* <button onClick={props.langChange}>es/en</button> */}
    <HeaderTop langChange={props.langChange} lang={props.lang}/>
    <HeaderNavbar data={props.data.navbar} />
    <HeaderDown data={props.data.headerdown} />
    </>
  )
}