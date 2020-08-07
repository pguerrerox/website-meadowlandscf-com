// importing node modules
import fs from 'fs';
import path from 'path';

// importing components


// exporting component
export default function Services(props) {
  const lang = props.lang
  const data = props.data[lang];

  return (
    <>
    <h1 className='display-1'>{props.data.en.h1}</h1>
    <div className='container'>
      <div class="card-deck">
      <div className='row'>
        {
        data.services.map((item) => {
          return (
            <>
            
              <div className='col-4'>
                <div class="card">
                  <img class="card-img-top" src={"/images/cards/"+item.img+".jpg"} alt={item.altText}/>
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.content}</p>
                  </div>
                </div>
              </div>
            
            </>
          )
        })
        }
        </div>
      </div>
    </div>
    
    </>
  )
}

// fetching data
export async function getStaticProps() {
  const basepath = path.join(process.cwd(), 'data');
  const filepath = path.join(basepath, 'services.json');
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
//     paths: ['/services'],
//     fallback: false
//   }
// }