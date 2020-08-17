// exporting component
export default function HeaderTop(props) {
  return (
    <section className='HeaderTop bg-primary'>
      <div className='container d-flex justify-content-center py-1'>
        <span className='text-white font-weight-bold py-1'>Hablamos Español</span>
        <button className="btn btn-sm btn-secondary font-weight-bold ml-auto" onClick={props.langChange}>{props.lang === "en" ? "Español" : "English"}</button>
      </div>
    </section>
  )
}