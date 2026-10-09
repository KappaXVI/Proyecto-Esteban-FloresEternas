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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50
      min-h-[80px] lg:min-h-[100px]
      flex items-center
      transition-all duration-300
      ${isScrolled ? 'bg-crema/95 backdrop-blur-sm shadow-warm' : 'bg-transparent'}
    `}>
      <nav className="container-main px-6 h-full relative" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-full w-full">
          {/* LINKS IZQUIERDA - alineado al borde izquierdo */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-10 min-w-[180px]">
            {navLinks.slice(0, 3).map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} isActive={location.pathname === href} />
            ))}
          </div>

          {/* ESPACIADOR INVISIBLE - entre izquierda y centro */}
          <div className="hidden lg:block w-[350px]" />

          {/* LOGO CENTRADO - centrado automáticamente por justify-between */}
          <div className="hidden lg:flex items-center lg:items-baseline shrink-0 px-[350px]">
            <Link
              to="/"
              className="flex items-center"
              aria-label="Flores Eternas - Inicio"
            >
              <img
                src={logo}
                alt=""
                className="h-14 lg:h-20 w-auto"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* ESPACIADOR INVISIBLE - entre centro y derecha */}
          <div className="hidden lg:block w-[350px]" />

          {/* LINKS DERECHA - alineado al borde derecho */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-10 ml-auto min-w-[140px]">
            {navLinks.slice(3).map(({ label, href }) => (
              <NavLink key={label} label={label} href={href} isActive={location.pathname === href} />
            ))}
          </div>
        </div>

        {/* HAMBURGUESA MOBILE - logo a la izquierda, menú a la derecha */}
        <div className="flex lg:hidden w-full justify-between items-center">
          <img
            src={logo}
            alt="Flores Eternas"
            className="h-14 w-auto"
            aria-hidden="true"
          />
          <button
            type="button"
            className="btn-ghost p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
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
        font-poppins text-sm font-medium transition-colors duration-200
        relative py-1.5 px-1
        ${active
          ? 'text-vino'
          : 'text-cafe-oscuro hover:text-vino'
        }
        ${active ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-vino after:rounded-full' : ''}
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
      className="lg:hidden animate-fade-in py-3 border-t border-gris-claro mt-2 flex flex-col w-full space-y-2 px-2"
      role="navigation"
      aria-label="Menú móvil"
    >
      <div className="flex justify-between items-center mb-2">
        <img
          src={logo}
          alt="Flores Eternas"
          className="h-8 w-auto"
        />
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="btn-ghost p-1"
          aria-label="Cerrar menú"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            to={href}
            onClick={onClose}
            className={`
              font-poppins text-sm font-medium py-2.5 px-2 rounded-xl transition-colors
              ${location.pathname === href
                ? 'bg-rosa-suave text-vino'
                : 'text-cafe-oscuro hover:bg-rosa-suave hover:text-vino'}
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