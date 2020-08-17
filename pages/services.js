// importing node modules
import fs from 'fs';
import path from 'path';

// exporting component
export default function Services(props) {
  const lang = props.lang
  const data = props.data[lang];

  return (
    <section className='Services pt-5 pb-3'>
      <div className='container'>
        <h5 className='text-center text-secondary'>{data.h1}</h5>
        <div className="row row-cols-3">
          {
            data.services.map((item, i) => {
              return (
                <div className='col mt-4' key={i}>
                  <div className="card bg-light h-100">
                    <img className="card-img-top" src={"/images/cards/" + item.img + ".jpg"} alt={item.altText} />
                    <h5 className='card-header text-dark text-center'>{item.title}</h5>
                    <div className="card-body">
                      <p className="card-text text-gray">{item.content}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
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