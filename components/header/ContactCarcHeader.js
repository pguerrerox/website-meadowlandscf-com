import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import ContactCard from '../../css/ContactCard.css';
import SocialCard from '../../css/SocialCard.css';

// the type prop will determine the displayed data
// the data prop comes all the way down from the page
// if theres a social prop, the component will display social apps logos with links
export default function ContactCardHeader(props){

  const proData = props.data;
  const type = props.type;

  const data =  proData[type];
  const social = proData['social'];
  const socialIcons = ['facebook', 'instagram', 'linkedin']

  return (
    props.social 
    ?
    <div className='CardContainer'>
      {
      socialIcons.map( (x) => {
        return (
        <div className='Card-iconContainer'>
          <div className='socialIcon'>
          <FontAwesomeIcon icon={['fab', social[x].logo]}/>
          </div>
        </div>
        )})
      }

      <style jsx>{SocialCard}</style>
    </div>
    :
    <div className='CardContainer'>
      <div className='Card-imgContainer'>
        <FontAwesomeIcon className='favIcon' icon={data.logo} fixedWidth/>
      </div>
      <div className='Card-textContainer'>
        <h3 className='upperText'><strong>{data.topLine}</strong></h3>
        <p className='lowerText'>{data.botLine}</p>
      </div>

      <style jsx>{ContactCard}</style>
    </div>
  )
}