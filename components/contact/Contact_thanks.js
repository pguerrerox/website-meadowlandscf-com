// exporting component
export default function Contact_thanks(props){
  const data = props.data;

  return(
    <>
    <section className='Contact_thanks'>
      <div className='container'>
        <div className='content'>
          <h1>{data.h1}</h1>
          <h3>{data.h3}</h3>
          <p>{data.p}</p>
        </div>
      </div>
    </section>
    </>
  )
}