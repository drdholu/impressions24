import React from 'react';
import './Cards.css'; 
const Cards = () => {
    return (
        <div className="container">
            <h1 className='main-heading'>EVENTS</h1>
            <ul id="cards">
                <li className="card" id="card1">
                    <div className="card-body" style={{ backgroundColor: '#52B2CF' }}>
                        <h2>Card 1</h2>
                    </div>
                </li>
                <li className="card" id="card2">
                    <div className="card-body" style={{ backgroundColor: '#E5A36F' }}>
                        <h2>Card 2</h2>
                    </div>
                </li>
                <li className="card" id="card3">
                    <div className="card-body" style={{ backgroundColor: '#9CADCE' }}>
                        <h2>Card 3</h2>
                    </div>
                </li>
                <li className="card" id="card4">
                    <div className="card-body" style={{ backgroundColor: '#D4AFB9' }}>
                        <h2>Card 4</h2>
                    </div>
                </li>
                <li className="card" id="card5">
                    <div className="card-body" style={{ backgroundColor: '#D4AFB9' }}>
                        <h2>Card 5</h2>
                    </div>
                </li>
                <li className="card" id="card6">
                    <div className="card-body" style={{ backgroundColor: '#D4AFB9' }}>
                        <h2>Card 6</h2>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Cards;
