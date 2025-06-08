import { useState } from 'react';
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';
import { useTheme } from '../hooks/useTheme';
// import { useWindowSize } from '../hooks/useWindowSize';

export default function Home() {
    const [qry, setQry] = useState('');
    const [isDark] = useTheme();
    // const windowSize = useWindowSize();

    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <div className='search-filter-container'>
                <SearchBar setQry={setQry} />
                <SelectMenu setQry={setQry} />
            </div>
            {/* <h1 style={{ textAlign: 'center' }}>
                {windowSize.width} X {windowSize.height}
            </h1> */}
            <CountriesList qry={qry} />
        </main>
    );
}
