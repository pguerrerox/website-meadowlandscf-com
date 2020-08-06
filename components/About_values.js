// exporting component
export default function About_values(props){
  const data = props.data;

  return(
    <>
    <section className='About_values'>
      <div className='container'>
        <h1>{data.h1}</h1>
        <img src={"/images/"+data.img+".jpg"} alt={data.imgAlt} />
        <ul>
        {
          data.div.map((point)=>{
            return (
              <>
              <li>
                <h2>{point.h2}</h2>
                <p>{point.p}</p>
              </li>
              </>
            )
          })
        }
        </ul>
      </div>
    </section>
    </>
  )
}