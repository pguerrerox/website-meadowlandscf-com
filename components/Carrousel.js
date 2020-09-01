// exporting component
export default function Carrousel(props) {
  const data = props.data;
  const isActive = (index) => index === 0 ? "active" : "";

  const carrouselInner = {
    width: "100%",
    maxHeight: "900px",
  }
  const carrouselItem = {
    maxHeight: "inherit"
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
    <section className='Carrousel d-none d-sm-block'>
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
                  <img src={`/carrousel/${item.image}.jpg`} class="d-block w-100" alt={item.alt}/>
                  <div className='position-absolute' style={{ ...item.positioncaptiontop, ...item.positioncaptionleft }}>
                    <h1 className="text-white shadow-effect" style={{ textShadow: "-2px 2px 1px black" }}>{item.caption}</h1>
                    <h2 className="text-black">{item.subcaption}</h2>
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

// ,
//       {
//         "image":"cocina2",
//         "positionbackground": "center center",
//         "caption": "Camilla y Vainilla",
//         "subcaption": "una vaina bacana!",
//         "positioncaptiontop": {"top": "250px"},
//         "positioncaptionleft":{"left": "25%"}
//       },
//       {
//         "image":"cocina3",
//         "positionbackground": "center bottom",
//         "caption": "Espacio y pisos, sontaillo",
//         "subcaption": "pisa bien el piso...",
//         "positioncaptiontop": {"top": "350px"},
//         "positioncaptionleft":{"left": "20%"}
//       },
//       {
//         "image":"cocina4",
//         "positionbackground": "center bottom",
//         "caption": "Espacio y pisos, sontaillo",
//         "subcaption": "pisa bien el piso...",
//         "positioncaptiontop": {"top": "350px"},
//         "positioncaptionleft":{"left": "20%"}
//       },
//       {
//         "image":"cuarto",
//         "positionbackground": "center bottom",
//         "caption": "Espacio y pisos, sontaillo",
//         "subcaption": "pisa bien el piso...",
//         "positioncaptiontop": {"top": "350px"},
//         "positioncaptionleft":{"left": "20%"}
//       },
//       {
//         "image":"sala",
//         "positionbackground": "center bottom",
//         "caption": "Espacio y pisos, sontaillo",
//         "subcaption": "pisa bien el piso...",
//         "positioncaptiontop": {"top": "350px"},
//         "positioncaptionleft":{"left": "20%"}
//       },
//       {
//         "image":"sotano",
//         "positionbackground": "center bottom",
//         "caption": "Espacio y pisos, sontaillo",
//         "subcaption": "pisa bien el piso...",
//         "positioncaptiontop": {"top": "350px"},
//         "positioncaptionleft":{"left": "20%"}
//       }