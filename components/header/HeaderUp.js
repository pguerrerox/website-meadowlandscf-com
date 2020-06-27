import style from '../../css/HeaderUp.css'

export default function HeaderUp() {
  return (
    <div className='HeaderUp'>
      <section className='top-bar'>
        <div className='container'>
          <p>Crystalo Inspiring Interiors, Basesd On United States... <a href="#">Get Approximate Estimation.</a></p>
        </div>
      </section>

      <section className="bot-bar">
        <div className='container'>
          <header>
            <div className='logo'><img src='/images/logo.png' alt='Brand Logo' /></div>
            <nav className='navbar'>
              <ul className='navbar-ul'>
                <li className='list-item'><a href=''>Home</a></li>
                <li className='list-item'><a href=''>Services</a></li>
                <li className='list-item'><a href=''>Contact</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </section>

      <style jsx>{style}</style>
    </div>
  )
}