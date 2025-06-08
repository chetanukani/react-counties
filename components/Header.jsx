import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
    const [isDark, setDark] = useTheme();

    // if (isDark) {
    //     document.body.classList.toggle('dark');
    // } else {
    //     document.body.classList.remove('dark');
    // }
    return (
        <header className={`header-container ${isDark ? 'dark' : ''}`}>
            <div className='header-content'>
                <h2 className='title'>
                    <Link to='/'>Where in the world?</Link>
                </h2>
                <p
                    className='theme-changer'
                    onClick={() => {
                        setDark(!isDark);
                        localStorage.setItem('isDarkMode', !isDark);
                    }}
                >
                    <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>
                    &nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} Mode
                </p>
            </div>
        </header>
    );
}
