import React from 'react';

export default function SearchBar({ setQry }) {
    return (
        <div className='search-container'>
            <i className='fa-solid fa-magnifying-glass'></i>
            <input
                type='text'
                onChange={(e) => setQry(e.target.value.toLowerCase())}
                placeholder='Search for a country...'
            />
        </div>
    );
}
