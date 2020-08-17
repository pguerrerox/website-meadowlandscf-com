// exporting component
export default function Carrousel(props) {
  const data = props.data;
  const isActive = (index) => index === 0 ? "active" : "";

  const bgImage = {
    width: "100%",
    minHeight: "65vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }
  const carrouselArrows = {
    width: "5%",
    background: "#00000040"
  }
  const carrouselIndicator = {
    width: "15px",
    height: "15px",
    border: "none",
    borderRadius: "50%"
  }

  return (
    <section className='Carrousel'>
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

        <div className="carousel-inner">
          {
            data.map((item, index) => {
              return (
                <div className={"carousel-item " + isActive(index)} style={{ backgroundImage: `url(/carrousel/${item.image}.jpeg)`, backgroundPosition: item.positionbackground, ...bgImage }} key={index}>
                  <div className='position-relative' style={{ ...item.positioncaptiontop, ...item.positioncaptionleft }}>
                    <h3 className="display-1 text-white shadow-effect" style={{ textShadow: "-3px 3px 1px black" }}>{item.caption}</h3>
                    <h5 className="text.muted text-light">{item.subcaption}</h5>

                  </div>
                </div>
              )
            })
          }
        </div>
        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev" style={carrouselArrows}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next" style={carrouselArrows}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <style jsx>{`
          .carousel-indicators .active{
            background: #40a7ea
          }
        `}</style>
    </section>
  )
}