// imported components
import HeaderTop from './header/HeaderTop';
import HeaderNavbar from './header/HeaderNavbar';
import HeaderDown from './header/HeaderDown';

// exported component
export default function Header (props){
  return(
    <>
    <div>
      <HeaderTop />
      <HeaderNavbar />
      <HeaderDown data={props.data} />
    </div>
    </>
  )
}