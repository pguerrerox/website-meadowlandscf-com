// exporting component
export default function Index_process(props) {
  const data = props.data;

  let fixedSize = {
    width: "50px",
    height: "50px",
    zIndex: "10"
  }
  let customHR = {
    transform: "translateY(58px)",
    width: "100%",
    border: "1px solid #40a7ea"
  }

  return (
    <section className='Index_process py-5 bg-light'>
      <div className='container'>
        <h5 className='text-center mb-4'>{data.header}</h5>
        <div className='row'>
          <hr className='d-xl-block d-none' style={customHR} />
          {
            data.steps.map((item, index) => {
              return (
                <div className='col-xl-3' key={index} >
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center bg-primary rounded-circle m-3' style={fixedSize}>
                      <div className='text-light font-weight-bold'>{index + 1}</div>
                    </div>
                    <h4 className='text-center mb-4'>{item.h4}</h4>
                    {/* <p className='text-center'>{item.p}</p> */}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}