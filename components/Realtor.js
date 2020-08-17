// exporting component
export default function Realtor(props) {
  const data = props.data

  const imgStyle = {
    width: "300px",
    height: "auto",
    border: '1px solid #666',
    borderRadius: '50%'
  }

  return (
    <section className="Realtor bg-primary py-4">
      <div className='container my-4'>
        <div className='content'>
          <div className='d-flex justify-content-between'>
            <div className='col-8'>
              <h5 className='text-left'>{data.h3}</h5>
              <h2 className='text-light display-4 my-4'>{data.name}</h2>
              <p className='text-secondary'>{data.text}</p>
              <a href={data.href} target='_blank' className='btn btn-lg bg-dark text-light text-uppercase font-weight-bold my-4'>{data.link}</a>
            </div>
            <div className='d-flex align-items-center p-2'>
              <img src={'./images/' + data.image + '.jpeg'} alt={data.altImg} style={imgStyle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}