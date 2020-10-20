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
        <h5 className='text-center text-secondary mb-4'>{data.h1}</h5>
        <div className="">
          <ul className='list-group d-flex flex-row flex-wrap justify-content-around justify-content-lg-between'>
          {
            data.services.map((item, i) => {
              return (
                <div className='card list-group-item text-center text-capitalize col-5 col-sm-5 col-md-3 border border-primary m-2' key={i}>
                  <img className='svg' src={"/images/services/" +(i+1)+"_"+ item.icon + ".svg"} alt={item.serviceText}/>
                  <h4 className='h4'>{item.serviceText}</h4>
                </div>
              )
            })
          }
          </ul>
        </div>
      </div>
      <style jsx>{`
      .card {
        transition: all 0.25s ease-in-out;
      }
      .svg, .h4 {
        transition: padding 0.25s;
      }
      .svg {
        width: 65px;
        color: #40a7ea;
        padding: 10px;
        margin: 5px;
        filter: invert(53%) sepia(85%) saturate(577%) hue-rotate(175deg) brightness(96%) contrast(91%);
      }
      .card {
        background-color: white;
      }
      .card:hover {
        background-color: #40a7ea;
        box-shadow: 0 0 10px 0px #000000cc;
      }
      .card:hover .svg {
        padding: 0;
        filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(118deg) brightness(100%) contrast(103%);
      }
      .card:hover .h4 {
        color: white;
      }
      `}</style>
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
      title:"Services",
      data
    }
  }
}