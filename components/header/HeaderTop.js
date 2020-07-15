// exported component
export default function HeaderTop(props) {
  return (
    <>
      <section className='HeaderTop'>
        <div className='container d-flex justify-content-center py-1'>
          <span className=''>Hablamos en espanol.</span>
        </div>
      </section>

      <style jsx>{`
      .HeaderTop {
        background: #26272b;
        color: gray
      }
      `}</style>
    </>
  )
}