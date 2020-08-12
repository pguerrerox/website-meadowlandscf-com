// exporting component
export default function Contact_text(props){
  const data = props.data;

  return(
    <>
    <section class="Contact_text">
  <div className='content'>
    <h2>{data.h2}</h2>
    {
      data.content.map( (item) => (
        <>
        <hr />
        <div>
          <h3>{item.title}</h3>
          {
            item.links.map((link)=>(
              <a href={link.href} title={link.title} target="_blank">{link.text}</a>
            ))
          }
        </div>
        </>
      ))
    }
  </div>
  </section>

    </>
  )
}