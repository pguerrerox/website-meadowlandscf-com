// importing node modules
import fs from 'fs';
import path from 'path';

// importing components
import Carrousel from '../components/Carrousel';
import BannerAbout from '../components/BannerAbout';
import BannerProcess from '../components/BannerProcess';
import BannerServices from '../components/BannerServices';

// exporting component
export default function Home(props) {
  const lang = props.lang
  const data = props.data[lang];

  return (
    <>
      <Carrousel data={data.carrousel} />
      <BannerAbout data={data.bannerabout} />
      <BannerProcess data={data.bannerprocess} />
      <BannerServices data={data.bannerservices}/>
    </>
  )
}

// fetching data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');
  const filepath = path.join(basepath, 'index.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  return {
    props: {
      data
    }
  }
}