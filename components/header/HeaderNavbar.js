// importing modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// importing nextjs/api
import Link from 'next/link';

// exporting component
export default function HeaderNavbar(props) {
  const menuItems = props.data

  return (
    <>
      <section className='HeaderMid bg-white sticky-top'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg py-2 row'>
            <div className='navbar-brand'>
              <Link href='/'>
                <a><img className='img-fluid' src='/images/logo-hori.png' alt="Brand Logo" /></a>
              </Link>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><FontAwesomeIcon icon="bars" /></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className='navbar-nav d-flex justify-content-end  align-items-center font-nexa'>
                {menuItems.map((item, index) => <Link href={item.link} key={index}><a className='text-capitalize nav-link mx-2'>{item.page}</a></Link>)}
                <button type="button" className="btn btn-primary btn-md btn-sm mx-3" data-toggle="modal" data-target="#exampleModal">Request a quote</button>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <style jsx>{`
    .HeaderMid img{
      width: 375px;
    }
    `}</style>
    </>
  )
}