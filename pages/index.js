// importing node modules
import fs from 'fs';
import path from 'path';

// importing components
import DefaultLayout from '../layouts/LayoutDefault';
import Carrousel from '../components/Carrousel';
import BannerAbout from '../components/BannerAbout';


// exporting component
export default function Home(props) {
  let data = JSON.parse(props.data)
  
  return (
    <>
      <DefaultLayout pageTitle="Home" data= {data}>
        <Carrousel/>
        <BannerAbout/>
      </DefaultLayout>
    </>
  )
}

// fetching data
export async function getStaticProps(){
  const basepath = path.join(process.cwd(), 'data');
  const filepath = path.join(basepath, 'contact.json');
  const data = fs.readFileSync(filepath, 'utf8');
  
  return {
    props: {
      data
    }
  }
}