// importing node modules
import fs from 'fs';
import path from 'path';

// importing components
import Contact_thanks from '../components/Contact_thanks';
import Contact_form from '../components/Contact_form';
import Contact_text from '../components/Contact_text';
import Realtor from '../components/Realtor';

// exporting component
export default function Contact(props) {
  const lang = props.lang
  const data = props.data[lang];
  const realtor = props.realtor[lang];

  return (
    <>
    <Contact_thanks data={data.thanks} />
    <Contact_form data={data.form} />
    <hr/>
    <Contact_text data={data.contact_text}/>
    <Realtor data={realtor}/>

    </>
  )
}

// fetching data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');
  const filepath = path.join(basepath, 'contact.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  const realtorPath = path.join(basepath, 'realtor.json');
  const realtor = JSON.parse(fs.readFileSync(realtorPath, 'utf8'));

  return {
    props: {
      data,
      realtor
    }
  }
}