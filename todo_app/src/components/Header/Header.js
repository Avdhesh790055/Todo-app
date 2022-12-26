import "./Header.css" ;
import Tickimage from "../Images/Tickimage.jfif";


function Header(){
    return(
        <div className="header-row"> 
            <div className="header-row-content">
                <div className="add-icon">
                    <img src={Tickimage} alt="tick icon"/>
                </div>
                <div className="header-text"> TODO  App</div>
                <div className="user-icon">
                                 
                </div>
           </div>
        </div>

    );
}

export default Header;