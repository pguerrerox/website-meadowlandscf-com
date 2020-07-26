// importing modules
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/* DESC
<type> prop will determine the displayed data
<data> prop comes all the way down from the page
if there is a social prop, the component will display social app logos with links */
export default function HeaderContactCard(props){
  const contactData = props.data[props.type]
  const socialIcons = ['facebook', 'instagram', 'linkedin']
  const social = props.data['social'];
  
  const iconStyle = {
    width: '45px',
    color: 'darkgray'
  }

  return (
    props.social
    ?
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2 d-flex justify-content-center'>
      <div className='d-flex flex-row justify-content-center align-items-center'>
      {
      socialIcons.map( (x, index) => {
        return (
          <div className='d-flex aling-items-center px-3' key={index}>
          <FontAwesomeIcon icon={['fab', social[x].logo]} style={iconStyle}/>
          </div>
        )})
      }
      </div>
    </div>
    :
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 py-2 d-flex justify-content-center'>
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <div className='d-flex align-items-center awesomeIcon'>
          <FontAwesomeIcon icon={contactData.logo} style={iconStyle}/>
        </div>
        <div className='pl-3'>
          <h5 className='m-0 p-0'><a href={contactData.link} className='text-dark text-decoration-none'>{contactData.topLine}</a></h5>
          <span className='text-nowrap'>{contactData.botLine}</span>
        </div>
      </div>
    </div>
  )
}