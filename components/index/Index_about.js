// importing nextjs/api
import Link from "next/link";

// importing modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// exporting component
export default function Index_about(props) {
  const data = props.data;

  const iconStyle = {
    width: '100px',
    color: '#40a7ea'
  }

  return (
    <section className='Index_about py-5'>
      <div className='container'>
        <h5 className='text-center text-secondary mb-4'>{data.header}</h5>
        <div className='row justify-content-between'>
          <div className='col-xl-5 d-flex flex-column justify-content-center align-items-center my-xl-0 mb-lg-4'>
            <h2>{data.leftColumn.h2}</h2>
            <p className='my-xl-5 my-lg-5'>{data.leftColumn.p}</p>
            <Link href={data.leftColumn.link}>
              <a className='btn btn-primary btn-lg w-50 text-uppercase font-weight-bold'>{data.leftColumn.button}</a>
            </Link>
          </div>
          <div className='col-xl-5 my-xl-0 mt-4'>
            {
              data.rightColumn.map((item, i) => {
                return (
                  // console.log(item.img);
                  <div className='d-flex my-3' key={i}>
                    <FontAwesomeIcon icon={item.img} style={iconStyle} />
                    <div className='ml-4'>
                      <h4>{item.h4}</h4>
                      <p>{item.p}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}