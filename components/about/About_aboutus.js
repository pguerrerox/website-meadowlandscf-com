// exporting component
export default function About_aboutus(props) {
  const data = props.data;

  return (
    <section className='About_aboutus py-5'>
      <>
        <div className='container'>
          <h2>{data.h2}</h2>
          <div className='row pt-2'>
            <p className='col-6 d-flex align-items-center'>{data.p}</p>
            <div className='col-6'>
              <img src={"/images/" + data.img + ".jpg"} alt={data.imgAlt} className='img-fluid' />
            </div>
          </div>
        </div>
      </>
    </section>
  )
}