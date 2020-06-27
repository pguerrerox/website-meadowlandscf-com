import HeaderUp from './header/HeaderUp';
import HeaderDown from './header/HeaderDown';

export default function Header (props){
  return(
    <div>
      <HeaderUp />
      <HeaderDown data={props.data} />
    </div>
  )
}