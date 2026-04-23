import { Link, useLocation } from 'react-router-dom';
import { ASSETS } from '../lib/constants';

export function Navigation() {
  const location = useLocation();

  const NavLink = ({ href, children, isExternal }: { href: string, children: React.ReactNode, isExternal?: boolean }) => {
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className="text-sm font-sans uppercase tracking-wide text-gorb-text hover:text-gorb transition-colors">
          {children}
        </a>
      );
    }
    
    // Hash link check
    if (href.startsWith('#')) {
      const isHome = location.pathname === '/';
      return isHome ? (
        <a href={href} className="text-sm font-sans uppercase tracking-wide text-gorb-text hover:text-gorb transition-colors">
          {children}
        </a>
      ) : (
        <Link to={`/${href}`} className="text-sm font-sans uppercase tracking-wide text-gorb-text hover:text-gorb transition-colors">
          {children}
        </Link>
      );
    }
    
    // Regular active check
    const isActive = location.pathname === href;
    
    return (
      <Link to={href} className={`text-sm font-sans uppercase tracking-wide transition-colors ${isActive ? 'text-gorb' : 'text-gorb-text hover:text-gorb'}`}>
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center">
      <div className="w-full max-w-4xl flex justify-between items-center bg-gorb-bg/90 backdrop-blur-md border border-gorb/10 rounded-full px-6 py-3 shadow-2xl">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={ASSETS.logo} alt="Gorbagana" className="h-6 sm:h-8 object-contain" />
          <span className="font-display tracking-widest text-lg text-gorb hidden sm:inline-block">GORBAGANA</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink href="#what-is-gor">What is Gorbagana</NavLink>
          <NavLink href="#build-on-gor">Build on GOR</NavLink>
          <NavLink href="/ecosystem">Ecosystem</NavLink>
          <NavLink href="#join-gang">Join gang</NavLink>
          <NavLink href="https://docs.gorbagana.wtf/" isExternal>Docs</NavLink>
        </div>
      </div>
    </nav>
  );
}
