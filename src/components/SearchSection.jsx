import GoogleLogo from "./GoogleLogo";
import SearchBar from "./SearchBar";
import Button from "./Button";
import Language from "./Language";


const SearchSection = () => {
    return ( <div style={{backgroundColor:"grey" , display:"flex" , justifyContent:"center"}}>
        <div >
        <GoogleLogo/> 
        <SearchBar/>
        <Button/>
        <Language/>
        </div>
        </div>)
    
}

export default SearchSection;