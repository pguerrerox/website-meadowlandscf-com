import ContactCardHeader from '../ContactCarcHeader';

import style from '../../css/HeaderDown.css';

export default function HeaderDown(props) {

  return (
    <div className='HeaderDown'>
      <div className='container'>
        <section className='HeaderDown-Contact'>
          <div className='vl'></div>
          <ContactCardHeader className='Card' data={props.data} type='location'/>
          <div className='vl'></div>
          <ContactCardHeader className='Card' data={props.data} type='hours'/>
          <div className='vl'></div>
          <ContactCardHeader className='Card' data={props.data} type='email'/>
          <div className='vl'></div>
          <ContactCardHeader className='Card' data={props.data} social/>
          <div className='vl'></div>
        </section>
      </div>

      <style jsx>{style}</style>
    </div>
  )
}