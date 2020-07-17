// exported component
export default function HeaderTop(props) {
  return (
    <>
      <section className='HeaderTop bg-primary text-light'>
        <div className='container d-flex justify-content-center py-1'>
          <span className='text-dark font-weight-bold'>Hablamos en español</span>
        </div>
      </section>

      <style jsx>{`
      .HeaderTop {
        background: #26272b;
        /* color: gray */
      }
      `}</style>
    </>
  )
}