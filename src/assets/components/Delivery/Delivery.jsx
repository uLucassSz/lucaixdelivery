import React from 'react';
import './Delivery.css'

import deliveryImg from '../../images/planeta.png'

const Delivery = () => {
  return (
    <div className='delivery'>
        <div className="deliveryContent">
          <img src={deliveryImg} alt="" />
          <div className="deliveryRoutes">
            <div className="route">
              <div className="circle"></div>
              <div className="routeContent">
                <small>Departamento</small>
                <span>Saindo do departamento de Guarulhos</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="route">
              <div className="circle"></div>
              <div className="routeContent">
                <small>Cidade</small>
                <span>O pacote está na cidade de São Paulo</span>
              </div>
            </div>
          </div>
          <div className="deliveryLogout">
            <a href="#">
              <i className="bx bx-log-out-circle"></i> Sair
            </a>
          </div>
        </div>

    </div>
  );
}

export default Delivery;