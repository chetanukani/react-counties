import React, { useEffect, useState } from 'react';
// import data from '../data.js';
import CountryCard from './CountryCard.jsx';
import CountriesListShimmer from './CountriesListShimmer.jsx';

export default function CountriesList({ qry }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(
            'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,tld,languages,currencies,borders'
        )
            .then((res) => res.json())
            .then((countries) => {
                setData(countries);
            });
    }, []);

    if (!data.length) {
        return <CountriesListShimmer />;
    }

    return (
        <>
            <div className='countries-container'>
                {data
                    .filter((a) => a.name.common.toLowerCase().includes(qry) || a.region.toLowerCase().includes(qry))
                    .map((a, i) => (
                        <CountryCard
                            name={a.name.common}
                            flag={a.flags.svg}
                            population={a.population}
                            region={a.region}
                            capital={a.capital?.[0]}
                            data={a}
                            key={i}
                        />
                    ))}
            </div>
        </>
    );
}
