// exporting component
export default function About_values(props) {
  const data = props.data;

  return (
    <section className='About_values py-5 bg-light'>
      <div className='container'>
        <h2 className='text-right'>{data.h2} </h2>
        <div className='row pt-2 d-flex flex-column flex-lg-row align-items-center'>
          <div className='col-lg-6 '>
            <img src={"/images/" + data.img + ".jpg"} alt={data.imgAlt} className='img-fluid w-100' />
          </div>
          <ul className='col-lg-6 my-3 list-unstyled d-flex flex-column align-items-center m-0'>
            {
              data.div.map((point, i) => {
                return (
                  <li className='py-2' key={i}>
                    <h4>{point.h4}</h4>
                    <p>{point.p}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}