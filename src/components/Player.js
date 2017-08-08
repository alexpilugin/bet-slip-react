import React, { Component } from 'react';
import './styles/Player.css';


const Player = ({ info, updateCounter }) => {
    return (
        <li>
            <div className="Player">
                <div className={info.incMode ? "clicked" : null}>
                    {info.player}
                </div>
                <button 
                    className={info.incMode ? "clicked" : null}
                    onClick={event => updateCounter(info)}>
                    {info.price}
                </button>
            </div>
        </li>
    );
}

export default Player;