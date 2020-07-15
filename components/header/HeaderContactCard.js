// imported modules
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/* DESC
the <type> prop will determine the displayed data
the <data> prop comes all the way down from the page
if there is a social prop, the component will display social app logos with links */
export default function ContactCardHeader(props){
  const proData = props.data;
  const type = props.type;

  const data =  proData[type];
  const social = proData['social'];
  const socialIcons = ['facebook', 'instagram', 'linkedin']

  const iconStyle = {
    width: '45px',
    color: 'darkgray'
  }

  return (
    props.social 
    ?
    <div className='col-xl-3 col-lg-4 mx-md-auto px-2 py-4'>
      <div className='socials d-flex flex-row justify-content-center align-items-center h-100'>
      {
      socialIcons.map( (x) => {
        return (
          <div className='d-flex aling-items-center px-3'>
          <FontAwesomeIcon icon={['fab', social[x].logo]} style={iconStyle}/>
          </div>
        )})
      }
      </div>
    </div>
    :
    <div className='col-xl-3 col-lg-4 d-flex flex-row justify-content-center px-2 py-4 CardContainer'>
      <div className='d-flex align-items-center awesomeIcon'>
        <FontAwesomeIcon icon={data.logo} style={iconStyle}/>
      </div>
      <div className='pl-3'>
        <h4>{data.topLine}</h4>
        <span className='text-nowrap'>{data.botLine}</span>
      </div>
    </div>
  )
}


