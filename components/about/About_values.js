// exporting component
export default function About_values(props) {
  const data = props.data;

  return (
    <section className='About_values py-5 bg-light'>
      <div className='container'>
        <h2 className='text-right'>{data.h2} </h2>
        <div className='row pt-2'>
          <div className='d-flex col-6 align-items-center'>
            <div className=''>
              <img src={"/images/" + data.img + ".jpg"} alt={data.imgAlt} className='img-fluid d-inline-block align-middle' />
            </div>
          </div>
          <ul className='col-6 list-unstyled'>
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