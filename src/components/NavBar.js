import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const NavBar = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="nav-links">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/achievements" className="nav-link">Achievements</Link>
          <Link href="/highlights" className="nav-link">Highlights</Link>
        </div>

        <div className="logo">
          <Link href="/">
            <div className="logo-circle">KV</div>
          </Link>
        </div>

        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
            <Image src="images/svgs/twitter.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon">
            <Image src="images/svgs/logo-github.svg" alt="GitHub" width={24} height={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
            <Image src="images/svgs/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="icon">
            <Image src="images/svgs/pinterest.svg" alt="Pinterest" width={24} height={24} />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="icon">
            <Image src="images/svgs/dribbble-icon.svg" alt="Dribbble" width={24} height={24} />
          </a>
          <button onClick={toggleMode} className="icon theme-toggle">
            <Image 
              src={mode === 'light' ? "images/svgs/moon-filled-to-sunny-filled-loop-transition.svg" : "images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg"} 
              alt="Theme Toggle" 
              width={24} 
              height={24} 
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

