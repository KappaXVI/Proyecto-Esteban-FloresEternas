import { useRef, useState, useEffect } from 'react';
import {
  Navbar,
  Section,
  Body,
  ButtonPrimary,
  ButtonSecondary,
} from '../components';

const fondoHero = '/images/Fondo.png';
const mesaInferior = '/images/MesaInferior.png';
const fondo2 = '/images/Fondo2.png';
const fondo3 = '/images/Fondo3.png';
const flor1 = '/images/Flor1.png';
const primeraImagen = '/images/PrimeraImagen.png';
const imgPedidos = '/images/Pedidos.png';
const imgInventario = '/images/Inventario.png';
const imgCierreCaja = '/images/CierreCaja.jpeg';
const technologies = ['React', 'Tailwind CSS', 'JavaScript', 'Vite'];

const adminSlides = [
  { src: imgPedidos, alt: 'Panel de Pedidos' },
  { src: imgInventario, alt: 'Panel de Inventario' },
  { src: imgCierreCaja, alt: 'Panel de Cierre de caja' },
];

const arrowRightIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const playIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const arrowIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* true cuando la pantalla mide 1024px o más (PC) */
function useIsDesktop() {
  const query = '(min-width: 1024px)';
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isDesktop;
}

/* Carrusel simple: solo celular */
function MobileCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [slides.length, index]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      setIndex((i) =>
        diff > 0 ? (i + 1) % slides.length : (i - 1 + slides.length) % slides.length
      );
    }
    touchStartX.current = null;
  };

  return (
    <div className="lg:hidden w-full">
      <div className="overflow-hidden py-4" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.alt} className="w-full shrink-0 flex justify-center px-3">
              <img
                src={s.src}
                alt={s.alt}
                className="w-full h-auto max-h-[320px] object-contain rounded-lg drop-shadow-warm-xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-2">
        {slides.map((s, i) => (
          <button
            key={s.alt}
            type="button"
            aria-label={`Ver ${s.alt}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-vino' : 'w-2 bg-vino/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

/* Carrusel tríptico: solo PC */
function AdminCarousel({ slides }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  const next = () => setActive((i) => (i + 1) % n);
  const prev = () => setActive((i) => (i - 1 + n) % n);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % n), 4000);
    return () => clearInterval(id);
  }, [paused, active, n]);

  const slideW = 66;      // ancho de la imagen central (% de la columna)
  const shift = 50;       // separación de las laterales
  const sideScale = 0.82; // tamaño de las laterales
  const sideOpacity = 0.4;

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((s, i) => {
          const offset = ((i - active + n + 1) % n) - 1; // -1, 0 o 1
          const isActive = offset === 0;
          return (
            <div
              key={s.alt}
              onClick={() => !isActive && setActive(i)}
              className={`absolute top-0 h-full flex items-center justify-center ${isActive ? '' : 'cursor-pointer'}`}
              style={{
                left: `${(100 - slideW) / 2}%`,
                width: `${slideW}%`,
                transform: `translateX(${(offset * shift * 100) / slideW}%) scale(${isActive ? 1 : sideScale})`,
                opacity: isActive ? 1 : sideOpacity,
                zIndex: isActive ? 20 : 10,
                transition: 'transform 600ms ease, opacity 600ms ease',
              }}
              aria-hidden={!isActive}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="max-w-full max-h-[85%] w-auto h-auto object-contain rounded-lg drop-shadow-warm-xl"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          className="w-9 h-9 rounded-full flex items-center justify-center text-vino hover:bg-rosa-suave transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.alt}
              type="button"
              aria-label={`Ver ${s.alt}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-vino' : 'w-2 bg-vino/30'}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          className="w-9 h-9 rounded-full flex items-center justify-center text-vino hover:bg-rosa-suave transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const isDesktop = useIsDesktop();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <Section
        ref={heroRef}
        variant="hero"
        id="inicio"
        aria-labelledby="hero-title"
        className="relative overflow-x-clip lg:overflow-visible"
      >
        {/* Fondo */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src={fondoHero} alt="" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-crema/66 via-crema/42 to-transparent" />
          <div className="absolute top-1/3 left-1/4 lg:top-1/3 lg:left-1/6 w-96 h-96 lg:w-[400px] lg:h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-crema/42 to-transparent rounded-full pointer-events-none" />
          <div className="absolute bottom-20 left-1/4 lg:bottom-20 lg:left-1/6 w-64 h-64 lg:w-[300px] lg:h-[300px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-crema/35 to-transparent rounded-full pointer-events-none" />
        </div>

        {/* Imagen compuesta gigante: SOLO PC */}
        <div
          className="absolute z-[5] pointer-events-none hidden lg:block"
          aria-hidden="true"
          style={{
            top: '64%',
            left: '62%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%',
            maxWidth: 'none',
            maxHeight: 'none',
          }}
        >
          <img
            src={primeraImagen}
            alt=""
            className="w-full h-full drop-shadow-warm-2xl opacity-100"
            loading="eager"
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Flor1: SOLO PC */}
        <div
          className="absolute z-[6] pointer-events-none hidden lg:block"
          aria-hidden="true"
          style={{ bottom: '-8%', left: '-4%', width: '31%', maxWidth: 'none' }}
        >
          <img
            src={flor1}
            alt=""
            className="w-full h-auto drop-shadow-warm-xl opacity-90"
            loading="eager"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div
          className="relative z-20 lg:pt-32 lg:pb-24"
          style={
            isDesktop
              ? { paddingLeft: '11%', paddingRight: '3%' }
              : { paddingTop: '150px', paddingBottom: '64px', paddingLeft: '6%', paddingRight: '6%' }
          }
        >
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* TEXTO */}
              <div
                className="lg:pr-0 text-center lg:text-left animate-fade-in-up"
                style={
                  isDesktop
                    ? { animationDelay: '100ms', position: 'relative', top: '-90px', left: '-230px' }
                    : { animationDelay: '100ms' }
                }
              >
                <h1
                  id="hero-title"
                  className="font-lora text-vino text-4xl sm:text-5xl xl:text-6xl leading-[1.05]"
                >
                  Tu negocio
                  <br />
                  de flores eternas,
                  <span className="block font-radley italic mt-1" style={{ color: '#fd465b' }}>
                    más fácil.
                  </span>
                </h1>

                <div className="!mt-6 flex justify-center lg:justify-start">
                  <Body
                    size="lg"
                    color="cafe-oscuro"
                    className="!m-0 max-w-sm !text-center lg:!text-left"
                  >
                    Gestiona tus pedidos, inventario y cierre de caja desde una sola
                    plataforma. Diseñada para floristerías que quieren crecer sin
                    complicaciones.
                  </Body>
                </div>

                <div className="!mt-14 flex flex-col items-center sm:flex-row gap-4 sm:justify-center lg:justify-start">
                  <ButtonPrimary
                    iconLeft={playIcon}
                    iconRight={arrowIcon}
                    className="w-full max-w-[220px] sm:w-auto sm:max-w-none"
                    onClick={() =>
                      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Ver cómo funciona
                  </ButtonPrimary>
                </div>
              </div>

              {/* COLUMNA DERECHA: solo PC */}
              <div className="relative animate-fade-in-up hidden lg:block" style={{ animationDelay: '300ms' }}>
                <div className="aspect-[4/3] lg:aspect-[3/2] w-full" />
              </div>
            </div>

            {/* Imágenes del hero: solo celular, centradas */}
            <div className="lg:hidden mt-10 mb-6 flex justify-center">
              <div className="relative w-[140%] shrink-0">
                <img
                  src={primeraImagen}
                  alt=""
                  aria-hidden="true"
                  className="block w-full drop-shadow-warm-2xl"
                  loading="eager"
                />
                <img
                  src={flor1}
                  alt=""
                  aria-hidden="true"
                  className="absolute z-10 bottom-[-6%] left-[2%] w-[36%] h-auto drop-shadow-warm-xl opacity-95 pointer-events-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Flecha scroll */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce" aria-hidden="true">
          <svg className="w-8 h-8 text-vino hover:text-rosa-suave transition-colors drop-shadow-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <div className="relative h-5 lg:h-10 -mt-5" aria-hidden="true" />
      </Section>

      {/* SECCIÓN: ADMINISTRA TU NEGOCIO */}
      <Section variant="adminHero" id="administra" aria-labelledby="admin-title" className="relative overflow-hidden">
        {/* Fondo */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img src={fondo2} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-crema/15 to-crema/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-crema/5 to-crema/35" />
          <div className="absolute bottom-1/3 left-1/6 lg:bottom-1/3 lg:left-1/6 w-96 h-96 lg:w-[400px] lg:h-[400px] -translate-x-1/2 translate-y-1/2 bg-gradient-to-tr from-crema/30 via-crema/10 to-transparent rounded-full pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-bl from-crema/35 via-crema/15 to-transparent rounded-full pointer-events-none" />
          <div
            className="absolute z-[6] pointer-events-none"
            aria-hidden="true"
            style={{ bottom: '-8%', left: '-4%', width: '31%', maxWidth: 'none' }}
          >
            <img
              src="/images/Flor2.png"
              alt=""
              className="w-full h-auto drop-shadow-warm-xl opacity-90"
              loading="eager"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <div
          className="relative z-20 pt-24 pb-16 lg:pt-32 lg:pb-24"
          style={
            isDesktop
              ? { paddingLeft: '11%', paddingRight: '3%' }
              : { paddingLeft: '6%', paddingRight: '6%' }
          }
        >
          <div className="grid lg:grid-cols-[minmax(0,36%)_minmax(0,64%)] gap-12 lg:gap-0 items-center">
            {/* TEXTO */}
            <div
              className="relative z-30 text-center lg:text-left animate-fade-in-up"
              style={
                isDesktop
                  ? { animationDelay: '100ms', position: 'relative', top: '-90px', left: '-45px' }
                  : { animationDelay: '100ms' }
              }
            >
              <h2
                id="admin-title"
                className="font-lora text-vino text-4xl sm:text-5xl xl:text-6xl leading-[1.05]"
              >
                Administra
                <br />
                tu negocio
                <span
                  className="block font-radley italic mt-1 lg:whitespace-nowrap"
                  style={{ color: '#fd465b' }}
                >
                  sin complicaciones.
                </span>
              </h2>

              <div className="!mt-6 flex justify-center lg:justify-start">
                <Body
                  size="lg"
                  color="cafe-oscuro"
                  className="!m-0 max-w-md !text-center lg:!text-left leading-relaxed"
                >
                  Lleva el control de tus pedidos, inventario
                  <br className="hidden lg:block" />{' '}
                  y cierre de caja desde una interfaz
                  <br className="hidden lg:block" />{' '}
                  simple e intuitiva.
                </Body>
              </div>
            </div>

            {/* PC: collage invisible como espaciador (mantiene el alto original) + carrusel encima */}
            <div
              className="relative w-full min-w-0 animate-fade-in-up hidden lg:block"
              style={{ animationDelay: '300ms' }}
            >
              <div className="invisible" aria-hidden="true">
                <img src={imgPedidos} alt="" className="relative block w-full lg:w-[95%] ml-auto rounded-lg" />
                <div
                  className="relative flex items-start gap-3"
                  style={{ width: 'max-content', marginLeft: '-8%', marginTop: 'calc(-9% - 130px)' }}
                >
                  <img src={imgInventario} alt="" className="block h-auto w-auto max-w-none rounded-lg" style={{ height: '14vw' }} />
                  <img src={imgCierreCaja} alt="" className="block h-auto w-auto max-w-none rounded-lg" style={{ height: '14vw' }} />
                </div>
              </div>
              <div className="absolute inset-0">
                <AdminCarousel slides={adminSlides} />
              </div>
            </div>

            {/* CELULAR: carrusel simple */}
            <MobileCarousel slides={adminSlides} />
          </div>
        </div>
      </Section>

      {/* SECCIÓN: DISPONIBLE EN TODOS TUS DISPOSITIVOS */}
      <div className="overflow-hidden">
        <Section
          variant="hero"
          id="dispositivos"
          aria-labelledby="devices-title"
          className="relative overflow-hidden"
          style={
            isDesktop
              ? { clipPath: 'inset(0 0 90px 0)', marginBottom: '-215px' }
              : { minHeight: 0, height: 'auto', clipPath: 'inset(0 0 5px 0)', marginBottom: '-5px' }
          }
        >
          {/* Fondo */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img src={fondo3} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-crema/10 to-crema/40" />
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-crema/10 to-crema/40" />
          </div>

          <div
            className="relative z-20"
            style={
              isDesktop
                ? { paddingTop: '64px', paddingBottom: '48px', paddingLeft: '8%', paddingRight: '6%' }
                : { paddingTop: '32px', paddingBottom: '10px', paddingLeft: '6%', paddingRight: '6%' }
            }
          >
            <div className="grid lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-8 lg:gap-6 items-center">
              {/* TEXTO */}
              <div
                className="relative z-30 text-center lg:text-left animate-fade-in-up"
                style={
                  isDesktop
                    ? { animationDelay: '100ms', translate: '0 -150px' }
                    : { animationDelay: '100ms' }
                }
              >
                <h2
                  id="devices-title"
                  className="font-lora text-vino text-4xl sm:text-5xl xl:text-6xl leading-[1.05]"
                >
                  Disponible en
                  <br />
                  todos tus dispositivos.
                </h2>
                <div className="!mt-6 flex justify-center lg:justify-start">
                  <Body
                    size="lg"
                    color="cafe-oscuro"
                    className="!m-0 max-w-sm !text-center lg:!text-left"
                  >
                    Accede desde tu computador, tablet o celular. Tu negocio siempre contigo, en tiempo real.
                  </Body>
                </div>
              </div>

              {/* IMAGEN: centrada en celular, ajuste original en PC */}
              <div
                className="relative z-10 animate-fade-in-up"
                style={
                  isDesktop
                    ? { animationDelay: '300ms', translate: '-80px 0', scale: '1.55' }
                    : { animationDelay: '300ms', scale: '1.35' }
                }
              >
                <img
                  src={mesaInferior}
                  alt="Composición de monitor de escritorio, laptop y celular con ramos de rosas a los lados"
                  className="w-full mx-auto drop-shadow-warm-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer
          className="relative bg-vino text-crema"
          style={{ zIndex: 1, padding: '28px 8% 20px 8%' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-4">
            <div className="text-center lg:text-left">
              <p className="font-lora text-2xl leading-tight">Flores Eternas</p>
              <p className="text-sm opacity-80 mt-1 max-w-xl mx-auto lg:mx-0">
                Proyecto web de gestión para floristerías: pedidos, inventario y cierre
                de caja en una interfaz responsive, diseñada y desarrollada desde cero.
              </p>
            </div>

            <div
              className="flex justify-center lg:justify-end shrink-0"
              style={isDesktop ? { marginBottom: '16px' } : { paddingBottom: '32px' }}
            >
              <ButtonSecondary iconRight={arrowRightIcon} variant="white" className="whitespace-nowrap">
                Conocer la plataforma
              </ButtonSecondary>
            </div>
          </div>

          <div className="mt-8 lg:mt-12 pt-4 border-t border-crema/20 flex flex-col lg:flex-row justify-between items-center gap-3 text-xs">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 opacity-80">
              <p>© 2026 Flores Eternas</p>
              <a href="#" className="hover:underline">Términos y condiciones</a>
              <a href="#" className="hover:underline">Política de privacidad</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="uppercase tracking-widest opacity-70">Construido con</span>
              <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1">
                {technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}