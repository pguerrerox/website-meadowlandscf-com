// exporting component
export default function About_aboutus(props) {
  const data = props.data;

  return (
    <section className='About_aboutus py-5'>
      <div className='container'>
        <h2>{data.h2}</h2>
        <div className='row pt-2 d-flex flex-column-reverse flex-lg-row align-items-center'>
          <p className='col-lg-6 my-3 d-flex align-items-center'>{data.p}</p>
          <div className='col-lg-6 imgContainer'>
            <img src={"/images/" + data.img + ".jpg"} alt={data.imgAlt} className='img-fluid w-100 imgEffect' />
          </div>
        </div>
      </div>
      <style jsx>{`
      .imgContainer{ overflow:hidden; transition: box-shadow 1s cubic-bezier(0.1, 0.1, 0.1, 1)}
      .imgContainer:hover{ box-shadow: 0 0 10px 0px #000000cc;}
      .imgEffect{ transition: transform 1s cubic-bezier(0.1, 0.1, 0.1, 1)}
      .imgEffect:hover{ transform: scale(1.25) rotate(5deg)}
      `}</style>
    </section>
  )
}