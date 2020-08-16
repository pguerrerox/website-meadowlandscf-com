// importing node modules
import fs from 'fs';
import path from 'path';

// exporting component
export default function Services(props) {
  const lang = props.lang
  const data = props.data[lang];

  return (
    <>
    <section className='Services pt-5 pb-3'>
      <div className='container'>
        <h5 className='text-center text-secondary'>{data.h1}</h5>
        <div class="row row-cols-3">
        {
        data.services.map((item) => {
          return (
            <>
              <div className='col mt-4'>
                <div class="card bg-light h-100">
                  <img class="card-img-top" src={"/images/cards/"+item.img+".jpg"} alt={item.altText}/>
                  <h5 className='card-header text-dark text-center'>{item.title}</h5>
                  <div class="card-body">
                    <p class="card-text text-gray">{item.content}</p>
                  </div>
                </div>
              </div>
            
            </>
          )
        })
        }
        </div>
      </div>
    </section>
      
    
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