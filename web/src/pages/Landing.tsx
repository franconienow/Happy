import React from "react";
import { Link } from 'react-router-dom/';

import Logo from '../images/logo.svg';
import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';

export default function Landing(){
  return(
    <div id='page-landing'>
      <div className="content-wrapper">
        <img src={Logo} alt="Logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Novo Hamburgo</strong>
          <span>Rio Grande do Sul</span>
        </div>

        <Link to="/app" className='enter-app'>
          <FiArrowRight size='25px' color='rgba(0, 0, 0, 0.6)'/>
        </Link>
      </div>
    </div>
  );
};