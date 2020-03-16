import React from 'react';


function Header(){
    return(
        <header className="header">
            <h2>Weather</h2>
            <div className="cityNav">
                <a href="/?city=Arcahaie">Arcahaie</a>
                <a href="/?city=Jacmel">Jacmel</a>
                <a href="/?city=Port-au-Prince">Port-au-Prince</a>
                <a href="/?city=Okap">Okap</a>
            </div>
        </header>
    );
}

export default Header;