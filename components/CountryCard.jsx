import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({
    name,
    population,
    region,
    capital,
    flag,
    data,
}) {
    return (
        <Link
            className='country-card'
            to={`/${name}`}
            state={{ name, population, region, capital, flag, data }}
        >
            <div className='flag-container'>
                <img src={flag} alt='flag' />
            </div>
            <div className='card-text'>
                <h3 className='card-title'>{name}</h3>
                <p>
                    <b>Population: </b>
                    {population.toLocaleString('en-IN')}
                </p>
                <p>
                    <b>Region: </b>
                    {region}
                </p>
                <p>
                    <b>Capital: </b>
                    {capital}
                </p>
            </div>
        </Link>
    );
}
