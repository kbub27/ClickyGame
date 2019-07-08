import React from 'react';
import './friendCss.css';

const FriendCard = props => {
    return (
        <div 
        className="card mt-4"
        value={props.id}
        onClick={() => props.handleClick(props.id)} 
        >
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
            </div>
        </div>
    )
};

export default FriendCard;