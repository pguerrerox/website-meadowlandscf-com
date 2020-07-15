// imported modules
import fs from 'fs';
import path from 'path';

// imported components
import DefaultLayout from '../layouts/LayoutDefault';

// exported component
export default function Home(props) {
  let data = JSON.parse(props.data)
  
  return (
    <DefaultLayout pageTitle="Home" data= {data}>
    </DefaultLayout>
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