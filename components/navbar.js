import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
               <Link href="/">
                    <a className="navbar-brand">Titulo</a>
               </Link>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                       <Link href="/">
                        <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                       </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog">
                            <a className="nav-link">Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  href="/girhub">
                            <a className="nav-link">Girhub</a>
                        </Link>
                    </li>                   
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar;