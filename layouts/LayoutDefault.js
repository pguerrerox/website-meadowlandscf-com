import Head from 'next/head';
import Header from '../components/Header';

export default function LayoutDefault(props) {
  let defaultTitle = 'Meadowlands Construction & Flip';

  return (
    <div>
      <Head>
        <title>{props.ogTitle ? (props.ogTitle + ' - ' + defaultTitle) : defaultTitle}</title>

        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* for IE */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* <!-- Favicon --> */}
        <link rel="icon" type="image/png" href="favicon.ico" sizes="48x48" />
        {/* <link rel="icon" type="image/png" href="images/favicon/favicon-16x16.png" sizes="16x16"/> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href=""/> */}
      </Head>
      <Header data={props.data}/>
      {props.children}
      <h1>Footer</h1>

      <style global jsx>{`
      html, body { 
        margin:0px;
        padding:0px;
        height: 100%;
        border: none;
        outline: none;
        font-size: 100%;
      }
      body {
          color: #828282;
          font-size: 15px;
          line-height: 25px;
          font-weight: 400;
          font-family: 'Rubik', sans-serif;
      }
      button:focus{
          outline: none;
      }
      button {
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
      }
      h1, h2, h3, h4, h5, h6 {
          color: #3a3a3a;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          margin: 0;
      }
      h3 {
          color: #27282c;
          font-size: 20px; 
          line-height: 26px;
      }
      h4 {
      
      }
      a,
      a:hover,
      a:active,
      a:focus {
          text-decoration: none;
          outline: none;
          border: none;
      }
      
      @media (min-width: 1200px) {
          .container {
              max-width: 1200px;
          }
      }
      img {
        max-width: 100%;
          height: auto;
      }
      i {
        font-style: normal;
      }
      ul,
      li {
          list-style: none;
          margin: 0;
          padding: 0;
      }
      ol,
      li{
          margin: 0;
          padding: 0;
      }
      .vl{
        border-left: 1px solid #b7b7b775;
        height: 100%;
      }


/* 
      .fix{
          position: relative;
          display: block;
          overflow: hidden;
      }
      
      .clr1{
          color: #f36727;
      }
      .bgclr1{
          background: #f36727;    
      }
      .secpd1{
          padding: 100px 0;
      }
      .secpd2{
          padding: 100px 0 60px;
      }
      .secpd3{
          padding: 100px 0 70px;
      }
      .btn-one {
          position: relative;
          display: inline-block;
          background: #e9212e;
          color: #ffffff;
          font-size: 15px;
          line-height: 60px;
          font-weight: 500;
          text-transform: capitalize;
          font-family: 'Rubik', sans-serif;
          padding: 0 30px 0;
          transition: all 500ms ease;
      }
      .btn-one img {
          position: relative;
          display: inline-block;
          padding-left: 10px;
          width: auto;
      }
      .btn-one span:before {
          font-size: 26px;
          line-height: 14px;
          display: inline-block;
          padding-left: 10px;
          position: relative;
          top: 4px;
      }
      .btn-one:hover{
          color: #ffffff;
          background: #27282c;
      }
      .btn-two{
          color: #27282c;
          font-size: 15px;
          line-height: 20px;;
          font-weight: 500;
          text-transform: capitalize;
          font-family: 'Rubik', sans-serif;
          transition: all 500ms ease;
      }
      .btn-two span:before {
          position: relative;
          top: 5px;
          font-size: 26px;
          line-height: 14px;
          display: inline-block;
          padding-left: 10px;
      }
      .btn-two:hover{
          color: #e9212e;
      }
      .btn-three {
          position: relative;
          display: inline-block;
          background: #ffffff;
          color: #203260;
          font-size: 14px;
          line-height: 62px;
          font-weight: 700;
          height: 60px;
          text-transform: uppercase;
          font-family: 'Roboto', sans-serif;
          padding: 0 30px 0;
          border-radius: 5px;
          transition: all 500ms ease;
      }
      .btn-three span:before {
          position: relative;
          display: inline-block;
          top: 4px;
          padding-left: 9px;
          font-size: 20px;
          font-weight: 400;
      }
      .btn-three:hover{
          color: #3aa40c;
      }
      .sec-title {
          position: relative;
          display: block;
          margin-top: -5px;
          padding-bottom: 50px;
      }
      .sec-title.max-width{
          max-width: 650px;
          margin: -5px auto 0;
      }
      .sec-title.with-text{
          padding-bottom: 52px;    
      }
      .sec-title p{
          color: #e9212e;
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0 0 7px;
          font-family: 'Poppins', sans-serif;
      }
      .sec-title .title {
          position: relative;
          display: block;
          color: #27282c;
          font-size: 36px;
          line-height: 44px;
          font-weight: 700;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
      }
      .sec-title .title.clr-white{
          color: #ffffff;    
      }
      .sec-title .title span{
          font-weight: 400;
      }
      .sec-title .bottom-text{
          color: #7c7e84;
          font-size: 17px;
          line-height: 27px;
          font-weight: 400;
          text-transform: none;
          margin: 13px 0 0;
          font-family: 'Rubik', sans-serif;
      } */
      `}</style>
    </div>
  )
}