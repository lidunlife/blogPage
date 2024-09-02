import headerLog from "../../assets/imgs/header-log.png"
import '../Header/header.css'
function Header() {
    return ( 
        <header className="container">
            <img src={headerLog} alt="" />
            <div className="links">
                <a href="/home">Find Talent</a>
                <a href="/clients">Clients</a>
                <a href="/community">Community</a>
                <a href="/blog">Blog</a> 
                <a href="/about">About us</a> 
            </div>
            <div className="btns">
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        </header>
     );
}

export default Header;