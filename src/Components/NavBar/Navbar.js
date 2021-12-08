import "../../App.scss"
import AnimationLogo from "../AnimationLogo/AnimationLogo";

const Navbar = props => {
    const onClick = () => {
        let nav = document.getElementById("nav-toggle")
        nav.classList.toggle("unhide")
    }

    return(
        <div className="NavBar">
            <div className="logo">
                <AnimationLogo />
            </div>
            <img src="images/hamburg.png" className="hamburg" onClick={onClick} alt=""/>
            <nav id='nav-toggle'>
                <ul>
                    <li><a href="#">Property</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <button>Contact</button>
            </nav>
        </div>
    )
}

export default Navbar