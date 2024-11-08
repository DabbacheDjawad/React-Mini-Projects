import React,{useState} from "react";
function Navbar(){

    const [isOpen , setIsOpen] = useState(false);
    function toggleMenue(){
        setIsOpen(!isOpen);
    }

    return(
        <nav className="navbar-container">
            <div className="logo">
                <p>DJAWHAR EDDIN</p>
            </div>

            <div className= {`navbar ${isOpen?"open":""}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Searvices</a></li>
            </div>

            <button className="nav-btn" onClick={toggleMenue}>
                &#9776;
                </button>
        </nav>
    )
}
export default Navbar