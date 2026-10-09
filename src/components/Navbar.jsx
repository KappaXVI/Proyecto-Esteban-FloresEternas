import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ButtonGhost from './ButtonGhost';
import logo from '../images/Logotipo Flores Eternas con Monograma LP.png';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Funciones', href: '/funciones' },
  { label: 'Precios', href: '/precios' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Preguntas', href: '/preguntas' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${isScrolled ? 'bg-crema/95 backdrop-blur-sm shadow-warm' : 'bg-transparent'}
    `}>
      <nav className="container-main section-padding py-6" aria-label="Navegación principal">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link
              to="/"
              className="flex items-center gap-2 lg:gap-4 -ml-2"
              aria-label="Flores Eternas - Inicio"
            >
              <img
                src={logo}
                alt=""
                className="h-10 lg:h-12 w-auto"
                aria-hidden="true"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.slice(0, 3).map(({ label, href }) => (
                <NavLink key={label} label={label} href={href} isActive={location.pathname === href} />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(3).map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} isActive={location.pathname === href} />
            ))}
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="btn-ghost p-2 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} location={location} />
      </nav>
    </header>
  );
}

function NavLink({ label, href, isActive }) {
  const location = useLocation();
  const active = location.pathname === href;

  return (
    <Link
      to={href}
      className={`
        font-poppins text-sm font-medium transition-colors duration-200
        relative py-2 px-1
        ${active
          ? 'text-vino'
          : 'text-cafe-oscuro hover:text-vino'
        }
        ${active ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-vino after:rounded-full' : ''}
      `}
      aria-current={active ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}

function MobileMenu({ isOpen, onClose, location }) {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="lg:hidden animate-fade-in py-4 border-t border-gris-claro"
      role="navigation"
      aria-label="Menú móvil"
    >
      <div className="flex flex-col gap-2">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            to={href}
            onClick={onClose}
            className={`
              font-poppins text-base font-medium py-3 px-2 rounded-xl transition-colors
              ${location.pathname === href
                ? 'bg-rosa-suave text-vino'
                : 'text-cafe-oscuro hover:bg-rosa-suave hover:text-vino'
              }
            `}
            aria-current={location.pathname === href ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}