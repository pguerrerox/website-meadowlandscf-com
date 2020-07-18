// importing components
import HeaderContactCard from './HeaderContactCard';

// exporting component
export default function HeaderDown(props) {
  return (
    <>
    <section className='HeaderDown bg-light py-3 bg-light'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <HeaderContactCard data={props.data} type='location'/>
          <HeaderContactCard data={props.data} type='hours'/>
          <HeaderContactCard data={props.data} type='email'/>
          <HeaderContactCard data={props.data} social/>
        </div>
      </div>
    </section>
    </>
  )
}