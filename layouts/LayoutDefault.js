// importing nextjs/API
import Head from 'next/head';

// importing components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact_form from '../components/contact/Contact_form';

// importing custom bootstrap
import "../styles/custom.scss";

export default function LayoutDefault(props) {
  const defaultTitle = 'Meadowlands Construction & Flip';
  const pageTitle = props.children.props.title;
  const modalData = props.data[props.lang].modal;
  const formData = props.formData[props.lang].form;

  return (
    <>
      <Head>
        <title>{pageTitle ? (pageTitle + ' - ' + defaultTitle) : defaultTitle}</title>

        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* for IE */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Favicon --> */}
        <link rel="icon" type="image/png" href="favicon_48.png" sizes="48x48" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon_180.png" />

        {/* bootstrap */}
        {/* <link rel="stylesheet" 
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
      /> */}
      </Head>

      <Header data={props.data[props.lang].header} lang={props.lang} langChange={props.langChange} />
      {props.children}
      
      <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{modalData.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">X</span>
              </button>
            </div>
            <div class="modal-body">
              <Contact_form data={formData} width={true} />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">{modalData.btnClose}</button>
            </div>
          </div>
        </div>
      </div>

      <Footer data={props.data[props.lang].footer} />

      {/* bootstrap scripts */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
    </>
  )
}