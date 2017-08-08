import React from 'react';
import './styles/PlayerList.css';
import Player from './Player';

const PlayerList = ({ title, players, updateCounter }) => {
    const shortUID = () => ('0000' + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5);
    return (
        <div className="PlayerList">
            <div className="title">{title}</div>
            <ul>
                {players.map(el => <Player
                        key={shortUID()}
                        info={el}
                        updateCounter={updateCounter}
                    />
                )}
            </ul>
        </div>
    );
}

export default PlayerList;