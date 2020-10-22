import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Card = props => {
const {name,genre,avatar,_id} = props.data

    return (
        <div className='card'>
            <img className='hasMargin' src={avatar} alt={name} />
            <Link to={`/artists/${_id}`}><h1>{name}</h1></Link>
            <h2 className='hasMargin'>{genre}</h2>
        </div>
    )
}

export default Card