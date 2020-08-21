// exporting component
export default function About_aboutus(props) {
  const data = props.data;

  return (
    <section className='About_aboutus py-5'>
        <div className='container'>
          <h2>{data.h2}</h2>
          <div className='row pt-2 d-flex flex-column-reverse flex-lg-row align-items-center'> 
            <p className='col-lg-6 my-3 d-flex align-items-center'>{data.p}</p>
            <div className='col-lg-6'>
              <img src={"/images/" + data.img + ".jpg"} alt={data.imgAlt} className='img-fluid' />
            </div>
          </div>
        </div>
    </section>
  )
}