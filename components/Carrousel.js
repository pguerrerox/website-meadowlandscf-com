// exporting component
export default function Carrousel(props) {
  const data = props.data;
  const isActive = (index) => index === 0 ? "active" : "";

  const carrouselInner = {
    width: "100%",
    maxHeight: "900px",
  }
  const captionPosition = {
    maxWidth: "1000px",
    backgroundColor: "#00000085",
    textAlign: "center",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
  const carrouselArrows = {
    width: "50px",
    background: "#00000090"
  }
  const carrouselIndicator = {
    width: "15px",
    height: "15px",
    border: "none",
    borderRadius: "50%"
  }

  return (
    <section className='Carrousel d-sm-block'>
      <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {
            data.map((item, index) => {
              return (
                <li data-target="#carouselIndicators" data-slide-to={index} className={isActive(index)} key={index} style={carrouselIndicator}></li>
              )
            })
          }
        </ol>
        <div className="carousel-inner" style={carrouselInner}>
          {
            data.map((item, index) => {
              return (
                <div className={"carousel-item position-relative " + isActive(index)} key={index}>
                  <img src={`/carrousel/${item.image}.jpg`} className="d-block w-100" alt={item.alt}/>
                  <div className='position-absolute w-75' style={captionPosition}>
                    <h1 className="text-white">{item.caption}</h1>
                    <h2 className="text-primary">{item.subcaption}</h2>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev" style={carrouselArrows}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next" style={carrouselArrows}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a> */}
      </div>

      <style jsx>{`
          .carousel-indicators .active{
            background: #40a7ea
          }
          .Carrousel img{
            transition: transform 1.2s cubic-bezier(0.1, 0.1, 0.1, 1)
          }
          .Carrousel:hover img{
            transform: scale(1.25)
          }
        `}</style>
    </section>
  )
}