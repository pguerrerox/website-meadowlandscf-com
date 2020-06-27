import fs from 'fs';
import path from 'path';

import DefaultLayout from '../layouts/LayoutDefault';

export default function Home(props) {
  let data = JSON.parse(props.data)
  
  return (
    <DefaultLayout 
      ogTitle="Home"
      data= {data}
    >
      <h1>CONTENT</h1>
    </DefaultLayout>
  )
}

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