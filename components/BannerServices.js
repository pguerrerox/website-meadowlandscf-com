// importing nextjs/api
import Link from "next/link";

// exporting component
export default function BannerServices(props) {
  const data = props.data

  return (
    <>
    <section className='BannerServices py-4'>
      <div className='container my-4'>
        <h5 className='text-center m-5'>{data.header}</h5>
        <div className='row'>
          <div className='col-lg-6 '>
            <img className='img-fluid' src={"/images/"+data.image+".jpg"} alt="worker on the phone" />
          </div>
          <div className='col-lg-6 d-flex flex-column justify-content-lg-center align-items-lg-start'>
            <h4 className='m-0'>{data.h4}</h4>
            <p className='my-5'>{data.p}</p>
            <Link href='/services'>
              <a className='btn btn-lg btn-primary font-weight-bold text-uppercase '>{data.button}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}