// importing node modules
import fs from 'fs';
import path from 'path';

// importing components
import Carrousel from '../components/Carrousel';
import Index_about from '../components/index/Index_about';
import Index_process from '../components/index/Index_process';
import Index_services from '../components/index/Index_services';
import Realtor from '../components/Realtor';

// exporting component
export default function Home(props) {
  const lang = props.lang
  const data = props.data[lang];
  const realtor = props.realtor[lang];

  return (
    <>
      <Carrousel data={data.carrousel} />
      <Index_about data={data.bannerabout} />
      <Index_process data={data.bannerprocess} />
      <Index_services data={data.bannerservices} />
      <Realtor data={realtor} />
    </>
  )
}

// fetching data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');

  // index data
  const filepath = path.join(basepath, 'index.json');
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