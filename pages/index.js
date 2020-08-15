// importing node modules
import fs from 'fs';
import path from 'path';

// importing components
import Carrousel from '../components/Carrousel';
import BannerAbout from '../components/BannerAbout';
import BannerProcess from '../components/BannerProcess';
import BannerServices from '../components/BannerServices';
import Realtor from '../components/Realtor';

// exporting component
export default function Home(props) {
  const lang = props.lang
  const data = props.data[lang];
  const realtor = props.realtor[lang];

  return (
    <>
      <Carrousel data={data.carrousel} />
      <BannerAbout data={data.bannerabout} />
      <BannerProcess data={data.bannerprocess} />
      <BannerServices data={data.bannerservices}/>
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

// export async function getStaticPath(){
//   const staticPath = {
//     paths: ['/about', '/services'],
//     fallback: false
//   }
// }