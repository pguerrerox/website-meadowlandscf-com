// exporting component
export default function BannerProcess(props) {
  const lang = props.lang;
  const data = props.data[lang].bannerprocess;

  return (
    <>
    <section className='BannerProcess py-5 bg-light'>
      <div className='container my-4'>
        <h6 className='text-center'>{data.header}</h6>
        <div className='row'>
          {
            data.steps.map( (item, index) => {
              return (
                <div className='col-xl-3'>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='text-center rounded-circle bg-primary w-25 p-3 m-4'>{index+1}</div>
                    <h4 className='text-center'>{item.h4}</h4>
                    <p className='text-center'>{item.p}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}