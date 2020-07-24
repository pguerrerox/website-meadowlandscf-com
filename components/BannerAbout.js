// importing modules
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// exporting component
export default function BannerAbout(props) {
  const lang = props.lang;
  const data = props.data[lang].bannerabout;

  const iconStyle = {
    width: '100px',
    color: 'darkgray'
  }

  return (
    <>
    <section className='BannerAbout py-5'>
      <div className='container'>
        <h6 className='text-center m-4'>{data.header}</h6>
        <div className='row justify-content-between'>
          <div className='col-xl-5 d-flex flex-column'>
            <h2>{data.leftColumn.h2}</h2>
            <p>{data.leftColumn.p}</p>
            <button className='btn btn-primary btn-lg w-50 m-auto'>{data.leftColumn.button}</button>
          </div>
          <div className='col-xl-5'>
           {
              data.rightColumn.map( (item) => {
                return (
                  // console.log(item.img);
                  <div className='d-flex'>
                    <FontAwesomeIcon icon={item.img} style={iconStyle} />
                    <div className='ml-4'>
                      <h4>{item.h4}</h4>
                      <p>{item.p}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
    </>
  )
}