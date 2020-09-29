// importing node modules
import fs from 'fs';
import path from 'path';

// importing modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// exporting component
export default function Services(props) {
  const lang = props.lang
  const data = props.data[lang];

  const iconStyle = {
    width: '65px',
    color: '#40a7ea',
    padding: '10px',
    margin: '5px'

  }

  return (
    <section className='Services pt-5 pb-3'>
      <div className='container'>
        <h5 className='text-center text-secondary'>{data.h1}</h5>
        <div className="">
          <ul className='list-group d-flex flex-row flex-wrap justify-content-around'>
          {
            data.services.map((item, i) => {
              return (
                <div className='list-group-item text-center text-capitalize col-3 border border-primary m-2'>
                  <img style={iconStyle} src={"/images/services/" +(i+1)+"_"+ item.icon + ".svg"} alt={item.serviceText}/>
                  <h3>{item.serviceText}</h3>
                </div>

                // <div className='col-12 col-sm-6 col-md-4 mt-4' key={i}>
                //   <div className="card bg-light h-100 cardEffect">
                //     <div className='imgContainer'>
                //       <img className="card-img-top imgEffect" src={"/images/cards/" + item.img + ".jpg"} alt={item.altText} />
                //     </div>
                //     <h5 className='card-header text-dark text-center'>{item.title}</h5>
                //     <div className="card-body">
                //       <p className="card-text text-gray">{item.content}</p>
                //     </div>
                //   </div>
                // </div>
              )
            })
          }
          </ul>
        </div>
      </div>
      <style jsx>{`
      svg fill{
    fill: red;
}
      .cardEffect{ transition: box-shadow 0.25s ease-in-out}
      .cardEffect:hover{ box-shadow: 0 0 10px 0px #000000cc}
      .imgContainer{ overflow:hidden}
      .imgEffect{ transform: scale(1.15); transition: transform 1s cubic-bezier(0.1, 0.1, 0.1, 1)}
      .cardEffect:hover .imgEffect{ transform: scale(1)}
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
      data
    }
  }
}