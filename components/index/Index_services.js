// importing nextjs/api
import Link from "next/link";

// exporting component
export default function Index_services(props) {
  const data = props.data

  return (
    <section className='Index_services py-5'>
      <div className='container'>
        <h5 className='text-center mb-4'>{data.header}</h5>
        <div className='row'>
          <div className='col-lg-6 d-flex align-items-center'>
            <img className='img-fluid' src={"/images/" + data.image + ".jpg"} alt="worker on the phone" />
          </div>
          <div className='col-lg-6 my-4 d-flex flex-column justify-content-center align-items-center'>
            <h4 className='m-0'>{data.h4}</h4>
            <p className='my-5'>{data.p}</p>
            <Link href='/services'>
              <a className='btn btn-lg btn-primary font-weight-bold text-uppercase '>{data.button}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}