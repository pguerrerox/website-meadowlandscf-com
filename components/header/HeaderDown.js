import ContactCardHeader from './ContactCarcHeader';

import style from '../../css/HeaderDown.css';

export default function HeaderDown(props) {

  return (
    <div className='HeaderDown'>
      <div className='container'>
        <section className='HeaderDown-Contact'>
          <ContactCardHeader className='Card' data={props.data} type='location'/>
          <ContactCardHeader className='Card' data={props.data} type='hours'/>
          <ContactCardHeader className='Card' data={props.data} type='email'/>
          <ContactCardHeader className='Card' data={props.data} social/>
        </section>
      </div>

      <style jsx>{style}</style>
    </div>
  )
}