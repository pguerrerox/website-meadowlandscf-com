// importing nextjs/api
import Link from "next/link";

// exporting component
export default function Footer(props){
  const data = props.data;

  return(
    <>
    <section className='Footer pt-5 pb-3 bg-dark'>
      <div className='container'>
        <div className='d-flex justify-content-between row text-light'>
          <div className='left col-xl-3 d-flex flex-column justify-content-center align-items-center'>
            <img src={"images/"+data.left.logo+".png"} alt={data.left.logoAlt} className='mb-4' />
            <p>{data.left.slogan}</p>
          </div>
          <div className='center col-xl-3'>
            <h5 className='text-capitalize text-center'>{data.center.title}</h5>
            <ul className='list-unstyled'>
              {
                data.center.sitemap.map((item, index) => {
                  return (
                    <li className='my-1'><Link href={item.link} key={index}><a className='text-capitalize'>{item.page}</a></Link></li>
                  )
                })
              }
            </ul>
          </div>
          <div className='right col-xl-3'>
            <h5 className='text-capitalize text-center'>{data.right.title}</h5>
              {
                data.right.items.map((item, index) => {
                  return (
                    <div className='my-3' key={index}> 
                      <h6 className='my-0'>{item.title}</h6>
                      <a href={item.link}>{item.text}</a>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
      <hr/>
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