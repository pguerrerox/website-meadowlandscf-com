// exporting component
export default function Realtor(props){
  const data = props.data

  return(
    <>
    <section class="Realtor">
      <div className='container'>
        <div className='content'>
          <div>
            <h3>{data.h3}</h3>
            <h2>{data.name}</h2>
            <p>{data.text}</p>
            <a href={data.href}>{data.link}</a>
          </div>
          <div>
            <img src={"/images/"+data.image+".jpg"} alt={data.altImg} />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}