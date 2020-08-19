// importing nextjs/api
import Link from "next/link";

// exporting component
export default function Footer(props) {
  const data = props.data;

  return (
    <>
      <section className='Footer pt-5 pb-3 bg-dark'>
        <div className='container'>
          <div className='d-flex justify-content-between row text-light'>
            <div className='left col-xl-4 col-lg-12 mt-xl-0 d-flex flex-column justify-content-center align-items-center'>
              <img src={"images/" + data.left.logo + ".png"} alt={data.left.logoAlt} className='mb-4' />
              <p>{data.left.slogan}</p>
            </div>
            <div className='center col-xl-4 col-lg-6 mt-xl-0 mt-lg-4'>
              <h5 className='text-capitalize text-center text-light font-nexa'>{data.center.title}</h5>
              <ul className='list-unstyled text-xl-left text-lg-center'>
                {
                  data.center.sitemap.map((item, index) => {
                    return (
                      <li className='my-1' key={index}><Link href={item.link} key={index}><a className='text-capitalize'>{item.page}</a></Link></li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='right col-xl-4 col-lg-6 mt-xl-0 mt-lg-4'>
              <h5 className='text-capitalize text-center text-light font-nexa'>{data.right.title}</h5>
              {
                data.right.items.map((item, index) => {
                  return (
                    <div className='my-3 text-xl-left text-lg-center' key={index}>
                      <h6 className='my-0 text-light'>{item.title}</h6>
                      <a href={item.link}>{item.text}</a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <hr />
        <div className='container text-muted text-center'>
          <p className='m-0 small'>{data.copyright}</p>
          <p className='m-0 small'>{data.developer.uno}<a href={data.developer.link} target='blank'>{data.developer.dos}</a></p>
        </div>
      </section>

      <style jsx>{`
    .Footer > .container > div > div > img{
      width: 175px;
    }
    `}</style>
    </>
  )
}