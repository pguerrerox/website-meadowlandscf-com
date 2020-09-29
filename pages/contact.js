// importing nextjs/API
import Head from 'next/head';

// importing node modules
import fs from 'fs';
import path from 'path';

// importing components
import Contact_thanks from '../components/contact/Contact_thanks';
import Contact_form from '../components/contact/Contact_form';
import Contact_text from '../components/contact/Contact_text';
import Realtor from '../components/Realtor';

// exporting component
export default function Contact(props) {
  const lang = props.lang
  const data = props.data[lang];
  const realtor = props.realtor[lang];

  return (
    <>
    <Head>
      <script src="https://www.google.com/recaptcha/api.js"></script>
    </Head>

      <Contact_thanks data={data.thanks} />
      <div className='container'>
        <div className='row my-5'>
          <Contact_form data={data.form} />
          <Contact_text data={data.contact_text} />
        </div>
      </div>
      <Realtor data={realtor} />
    </>
  )
}

// fetching data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');

  //contact data
  const filepath = path.join(basepath, 'contact.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  // realtor data
  const realtorPath = path.join(basepath, 'realtor.json');
  const realtor = JSON.parse(fs.readFileSync(realtorPath, 'utf8'));

  return {
    props: {
      data,
      realtor
    }
  }
}