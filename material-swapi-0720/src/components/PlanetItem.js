import React from 'react';

const PlanetItem = (props) => {
    return <div className="planetItem">
        <div>{props.name}</div>
        <div>{props.population}</div>
        <div>{props.orbital_period}</div>
    </div>
}

export default PlanetItem;