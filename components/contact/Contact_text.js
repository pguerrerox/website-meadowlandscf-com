// exporting component
export default function Contact_text(props) {
  const data = props.data;

  return (
    <>
      <section class="Contact_text col-6">
        <div className='content text-center h-100 d-flex justify-content-center align-items-center'>
          <div className='mx-4 my-4 px-5 py-4'>
            <h3>{data.h3}</h3>
            {
              data.content.map((item) => (
                <>
                  <hr className='border border-primary my-4' />
                  <div>
                    <h4>{item.title}</h4>
                    {
                      item.links.map((link) => (
                        <a className='mx-2' href={link.href} title={link.title} target="_blank">{link.text}</a>
                      ))
                    }
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </section>

    </>
  )
}