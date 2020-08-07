// importing node modules
import fs from 'fs';
import path from 'path';

// importing components
import About_aboutus from '../components/About_aboutus';
import About_values from '../components/About_values';

// exporting component
export default function About(props) {
  const lang = props.lang
  const data = props.data[lang];

  return (
    <>
    {/* <h1 className='display-1'>About Page</h1> */}
    <About_aboutus data={data.aboutus}/>
    <About_values data={data.values}/>
    </>
  )
}

// fetching data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');
  const filepath = path.join(basepath, 'about.json');
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

  return {
    props: {
      data
    }
  }
}

// compiling page on build
// export async function getStaticPath(){
//   const staticPath = {
//     paths: ['/about', '/services'],
//     fallback: false
//   }
// }