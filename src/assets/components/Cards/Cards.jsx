import React from 'react';
import './Cards.css'

import orderImage from '../../images/teclado.png'
import authorImg from '../../images/author.jpg'
import qrCode from '../../images/qrcode.png'

const Cards = () => {
  return (
    <div className="cardContainer">
        <div className="cardBox">
            <h3>Detalhes do pedido</h3>
            <div className="cardContent">
                <div className="cardLink">
                    <button className='active'>Informações do pedido</button>
                    <button>Entregador</button>
                    <button>Vendedor</button>
                    <button>Documentos</button>
                </div>
                <hr />

                <div className="cardOrder">
                    <div className="orderInfo">
                        <img src={orderImage} alt="" />
                        <div className="cardInfo">
                            <span className="nameProduct">Teclado Mecânico Gamer HyperX Alloy Origins Core</span>
                            <h4 className='priceProduct'>R$ 429,99</h4>
                        </div>
                    </div>
                    <div className="orderOther">
                        <div className="other">
                            <span>Compra feita em</span>
                            <p>20 de outubro, 2023 às 15:10</p>
                        </div>
                        <div className="other">
                            <span>Código do produto</span>
                            <p>#B183S1</p>
                        </div>
                        <div className="other">
                            <span>Data prevista para entrega</span>
                            <p>23 de outubro, 2023 às 09:43</p>
                        </div>
                        <div className="other">
                            <span>Endereço</span>
                            <p>São Jorge, 777</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="cardBox cardDelivery">
            <h3>Detalhes da entrega</h3>
            <div className="cardContent">
                <div className="deliveryDetails">
                    <div className="deliveryAuthor">
                        <div className="deliveryInfo">
                            <img src={authorImg} alt="" />
                            <div>
                                <span>Lucas</span>
                                <small>Entregador</small>
                            </div>
                        </div>
                        <div className="deliveryInfo">
                            <i className="bx bxs-truck"></i>
                            <div>
                                <span>#O48ASD</span>
                                <small>Código</small>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="deliveryOrders">
                        <div className="deliveryOrder">
                            <i className="bx bx-user"></i>
                            <div>
                                <small>Pedido feito por</small>
                                <span>Akemi Santos</span>
                            </div>
                        </div>
                        <div className="deliveryOrder">
                            <i className="bx bx-calendar-alt"></i>
                            <div>
                                <small>Data prevista</small>
                                <span>23 de outubro, 2023</span>
                            </div>
                        </div>
                        <div className="deliveryOrder">
                            <i className="bx bxs-map"></i>
                            <div>
                                <small>Endereço</small>
                                <span>São Jorge, 777</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='qrCode' src={qrCode} alt="" />
            </div>
        </div>
    </div>
  );
}

export default Cards;