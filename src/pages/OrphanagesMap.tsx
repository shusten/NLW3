import React from 'react';
import {} from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
    return ( 
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2> Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :) </p>
                </header>

                <footer>
                    <strong>Salvador</strong>
                    <span>Ba</span>
                </footer>

                <div></div>
            </aside>
        </div>
        )
}

export default OrphanagesMap;