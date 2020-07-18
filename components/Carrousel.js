

export default function Carrousel(props) {
  return (
    <>
      <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/carrousel/cocina.jpeg" className="d-block w-100" alt="..."/>
            <h1 className='text-primary z-index-9000'>Hola</h1>
          </div>
          <div className="carousel-item">
            <img src="/carrousel/dormitorio.jpeg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/carrousel/sotano.jpeg" className="d-block w-100" alt="..."/>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
        </a>
        
        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
        </a>
      </div>

      <style jsx>{`
      .carousel{
        height: 650px !important;
      }
      .carousel-inner{
        height: inherit !important;
      }
      .carousel-item img{
        height: 100% !important;
      }
      `}</style>
    </>
  )
}