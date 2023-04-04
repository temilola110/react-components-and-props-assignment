import Location from "./Location";
import BottomLeftMenu from "./BottomLeftMenu";
import FooterText from "./FooterText";
import  BottomRightMenu from "./BottomRightMenu";


const Footer = () => {
    return (
    <div style={{backgroundColor:"GrayText"}}>
        <Location/>
        <BottomLeftMenu/>
        <FooterText/>
        <BottomRightMenu/>
        </div>)
    
}

export default Footer;