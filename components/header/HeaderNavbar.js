// imported nextjs/api
import Link from 'next/link';

// exported component
export default function HeaderNavbar() {
  let menuItems = [
    {page: "home", link: "/"},
    {page: "about", link: '/about'},
    {page: "services", link: '/services'},
    {page: "contact", link: '/contact'}
    ];

  return (
    <>
      <section className='HeaderMid'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg bg-white'>
            <div className='navbar-brand'>
              <Link href='/'>
                <a><img src='/images/logo-hori.png' alt="Brand Logo"/></a>
              </Link>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">X</span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className='navbar-nav d-flex justify-content-end'>
                {menuItems.map((item)=><Link href={item.link}><a className='nav-link mx-3'>{item.page}</a></Link>)}
                <button type="button" className="btn btn-primary btn-lg mx-3" data-toggle="modal" data-target="#exampleModal">Request a quote</button>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <style jsx>{`
      .HeaderMid img{
        width: 400px;
      }

      `}</style>
    </>
  )
}