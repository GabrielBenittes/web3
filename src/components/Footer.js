export default function Footer(){
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center pv-3 my4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">
                &copy; 2023 Donate Crypto, Inc.
            </p>
            <ul className="nav col-md4 justify-content-end">
                <li className="nav-item">
                    <a href="/" className="nav-link px-2 text-body-secondary">Inicio</a>
                </li>
                <li className="nav-item">
                    <a href="/create" className="nav-link px-2 text-body-secondary">Nova Campanha</a>
                </li>
                <li className="nav-item">
                    <a href="/donate" className="nav-link px-2 text-body-secondary">Doar</a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link px-2 text-body-secondary">Sobre</a>
                </li>
            </ul>
        </footer>   
    
        )
}

//Moedelo de rodapé ^
