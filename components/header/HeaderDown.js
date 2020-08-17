// importing components
import HeaderContactCard from './HeaderContactCard';

// exporting component
export default function HeaderDown(props) {
  const type = ['location', 'hours', 'email'];

  return (
    <section className='HeaderDown bg-light py-3 bg-light'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          {
            type.map((item, index) => (
              <HeaderContactCard data={props.data} type={item} key={index} />
            ))
          }
          <HeaderContactCard data={props.data} social />
        </div>
      </div>
    </section>
  )
}