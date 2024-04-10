import logoSvg from '../../svg/logo.svg'

function Header(){

    const descLogo = 'Essa é a logo do Blog.'
    
    return(
        <>
        <header className='flex-spacing-between'>
            <div className="logo">
            <img src={logoSvg} alt={descLogo}></img>
            </div>
            <div className="search">
                <input type='search' name='search' className='input-search'></input>
            </div>
            <div className="menu">
                <li><a href='#' className='navLink'>Cetegories</a></li>
                <li><a href='#' className='navLink'>Abount</a></li>
                <li><a href='#' className='navLink'>Contact</a></li>
            </div>
        </header>e
        </>
    )
}

export default Header;