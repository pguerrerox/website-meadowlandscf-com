// exporting component
export default function About_aboutus(props){
  const data = props.data;

  return(
    <>
    <section className='About_aboutus'>
      <>
      <div className='container'>
        <h1>{data.h1}</h1>
        <div>
          <p>{data.p}</p>
          <img src={"/images/"+data.img+".jpg"} alt={data.imgAlt} />
        </div>
      </div>
      </>
    </section>
    </>
  )
}