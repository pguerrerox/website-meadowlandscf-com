// exporting component
export default function BannerServices(props) {


  return (
    <>
    <section className='BannerServices py-4'>
      <div className='container my-4'>
        <h6 className='text-center m-5'>our services</h6>
        <div className='row'>
          <div className='col-lg-6 '>
            <img className='img-fluid' src="/images/content-1.jpg" alt="worker on the phone" />
          </div>
          <div className='col-lg-6 d-flex flex-column justify-content-lg-center align-items-lg-start'>
            <h4 className='m-0'>We offer the most complete package!</h4>
            <p className='my-5'>We are committed to building a sustainable future by fostering a collaborative spirit. We are committed to building a sustainable future by fostering a collaborative spirit. We are committed to building a sustainable future by fostering a collaborative spirit.</p>
            <button className='btn btn-lg btn-primary '>Explore all our services</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}