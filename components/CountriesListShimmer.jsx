import React from 'react';
import './CountriesListShimmer.css';

export default function CountriesListShimmer() {
    // new Array(10).fill(undefined).map(a=>{
    //     console.log(a)
    // })

    return (
        <div className='countries-container'>
            {Array.from({ length: 10 }).map((a, i) => {
                return (
                    <div key={i} className='country-card shimmer-card'></div>
                );
            })}
        </div>
    );
}
