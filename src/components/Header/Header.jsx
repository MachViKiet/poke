const Header = () => {

    return (
    <header className="header">
      <div className="theme-toggle"><button>{}</button></div>
      <div className="logo"><img src="logo.png" alt="Pokedex Logo" /></div>
      <div className="github-icon"><svg>{}</svg></div>
    </header>
    )
}


export default Header;