// exporting component
export default function Contact_text(props) {
  const data = props.data;

  return (
    <section className="Contact_text col-lg-6">
      <div className='content text-center h-100 d-flex justify-content-center align-items-center'>
        <div className='mx-4 my-4 px-4 py-4'>
          <h3>{data.h3}</h3>
          {
            data.content.map((item, i) => {
              return (
                <div key={i}>
                  <hr className='border border-primary my-4' />
                  <div>
                    <h4>{item.title}</h4>
                    {
                      item.links.map((link, i) => (
                        <a className='mx-2' href={link.href} title={link.title} target="_blank" key={i}>{link.text}</a>
                      ))
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}