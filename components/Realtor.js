// exporting component
export default function Realtor(props) {
  const data = props.data

  const imgStyle = {
    width: "300px",
    height: "auto",
    clipPath: 'circle(150px at center)'
  }

  const pStyle = {

  }

  return (
    <>
      <section class="Realtor bg-primary pt-4">
        <div className='container mt-4'>
          <div className='content'>
            <div className='d-flex justify-content-around pb-4'>
              <div className='col-7'>
                <h5 className='text-left'>{data.h3}</h5>
                <h2 className='text-light display-4 my-4'>{data.name}</h2>
                <p className='text-secondary'>{data.text}</p>
                <a href={data.href} target='_blank' className='btn btn-lg bg-dark text-light text-uppercase font-weight-bold my-4'>{data.link}</a>
              </div>
              <div className='d-flex align-items-center'>
                <img  src={'./images/' + data.image + '.jpeg'} alt={data.altImg} style={imgStyle}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}