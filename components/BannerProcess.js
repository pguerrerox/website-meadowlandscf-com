// exporting component
export default function BannerProcess(props) {
  const data = props.data;

  let fixedSize = {
    width: "50px",
    height: "50px",
    zIndex: "10"
  }
  let customHR = {
    transform: "translateY(-55px)",
    width: "115%",
    border: "1px solid #40a7ea"
  }

  return (
    <>
      <section className='BannerProcess py-5 bg-light'>
        <div className='container my-4'>
          <h5 className='text-center'>{data.header}</h5>
          <div className='row'>
            {
              data.steps.map((item, index) => {
                return (
                  <div className='col-xl-3'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                      <div class='d-flex justify-content-center align-items-center bg-primary rounded-circle m-3' style={fixedSize}>
                        <div className='text-light font-weight-bold'>{index + 1}</div>
                      </div>
                      <hr style={customHR}/>
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