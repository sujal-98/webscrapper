import './header.css';
const Header=()=>{
    const today=new Date().toString().slice(0,10)

    return(
        <header>
        <div className="text-container">
            <h1>Deal Finder</h1>
            <h2>{today}</h2>
        </div>
        <div className="logo-container">
        <img src='../../images/dealf.jpg' alt="logo" style={{ backgroundClip: "content-box" }} />
        </div>
        </header>
    )
}
export default Header;