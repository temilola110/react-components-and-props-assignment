import AppsLauncherIcon from "./AppsLauncherIcon";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";

const Header = () => {
    return (
        <div style={{ display: 'flex' , justifyContent: 'flex-end', padding: "8px" , backgroundColor:"GrayText"}}>
            <div style={{ display: "flex" , gap:"10px"}} >
                <MenuItem title ={"GMail"}/>
                <MenuItem title ={"Images"} />
                <AppsLauncherIcon />
                <Avatar />
                <br />
            </div>


        </div>
    )
}

export default Header;