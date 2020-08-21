// exporting component
export default function Contact_thanks(props) {
  const data = props.data;

  const bg = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "url(/images/logo_3.png)",
    backgroundSize: "30%",
    backgroundPosition: "85%",
    backgroundRepeat: "no-repeat",
    filter: "blur(25px)"
  }

  return (
    <section className='Contact_thanks'>
      <div className='container position-relative'>
        <div style={bg}></div>
        <div className='content my-5'>
          <h1 className='my-5'>{data.h1}</h1>
          <h3 className='mb-3'>{data.h3}</h3>
          <p className='col-12 col-lg-7 p-0'>{data.p}</p>
        </div>
      </div>
    </section>
  )
}