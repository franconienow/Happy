import React from "react";
import '../styles/pages/orphanage-map.css'
import { Link } from 'react-router-dom/';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

export default function OrphanageMap(){
  return(
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato</h2>
          <p>Muitas crianças estão esperando s sua visita :)</p>
        </header>

        <footer>
          <strong>Novo Hamburgo</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>

      <Map 
        center={[-29.6880479,-51.1333376]} 
        zoom={15} 
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker
          icon={mapIcon} 
          position={[-29.6880479,-51.1333376]} 
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={32} color='#FFF' />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size="32px" color="#fff" />
      </Link>
    </div>
  );
};