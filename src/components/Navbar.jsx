import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const logo = '/images/Logotipo%20Flores%20Eternas%20con%20Monograma%20LP.png';

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

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50
      h-20 lg:h-24
      flex items-center
      transition-all duration-300
      ${isScrolled
        ? 'bg-crema/95 backdrop-blur-sm shadow-warm'
        : isOpen
          ? 'bg-crema/95 shadow-warm lg:bg-transparent lg:shadow-none'
          : 'bg-transparent'}
    `}>
      <nav className="w-full px-6 lg:px-[50px] h-full" aria-label="Navegación principal">
        <div className="hidden lg:grid grid-cols-[minmax(600px,1fr)_auto_minmax(600px,1fr)] items-center h-full">
          {/* IZQUIERDA: Inicio, Funciones, Precios */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.slice(0, 3).map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} isActive={location.pathname === href} />
            ))}
          </div>

          {/* CENTRO: LOGO */}
          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="flex items-center"
              aria-label="Flores Eternas - Inicio"
            >
              <img
                src={logo}
                alt=""
                className="h-14 lg:h-16 w-auto"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* DERECHA: Testimonios, Preguntas */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.slice(3).map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} isActive={location.pathname === href} />
            ))}
          </div>
        </div>

        {/* MOBILE: logo a la izquierda, hamburguesa a la derecha */}
        <div className="flex lg:hidden w-full justify-between items-center h-full">
          <Link
            to="/"
            className="flex items-center"
            aria-label="Flores Eternas - Inicio"
            onClick={() => setIsOpen(false)}
          >
            <img src={logo} alt="" className="h-11 w-auto" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="flex items-center justify-center w-11 h-11 rounded-xl text-vino hover:bg-rosa-suave transition-colors"
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

        <MobileMenu key={location.pathname} isOpen={isOpen} onClose={() => setIsOpen(false)} location={location} />
      </nav>
    </header>
  );
}

function NavLink({ label, href }) {
  const location = useLocation();
  const active = location.pathname === href;

  return (
    <Link
      to={href}
      className={`
        font-poppins text-sm transition-colors duration-200
        relative py-1.5 px-1
        ${active
          ? 'text-vino font-bold'
          : 'text-cafe-oscuro hover:text-vino font-medium'
        }
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
      className="lg:hidden animate-fade-in absolute top-full left-0 right-0 bg-crema shadow-warm rounded-b-3xl px-6 pt-2 pb-6 border-t border-vino/10"
      role="navigation"
      aria-label="Menú móvil"
    >
      <div className="flex flex-col gap-2">
        {navLinks.map(({ label, href }) => {
          const active = location.pathname === href;
          return (
            <Link
              key={label}
              to={href}
              onClick={onClose}
              className={`
                font-poppins text-base text-center py-3 rounded-2xl transition-colors
                ${active
                  ? 'bg-rosa-suave text-vino font-bold'
                  : 'text-cafe-oscuro font-medium hover:bg-rosa-suave hover:text-vino'}
              `}
              aria-current={active ? 'page' : undefined}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}