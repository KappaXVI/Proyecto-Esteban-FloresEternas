import { useRef } from 'react';
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
const fondoDevices = '/images/MesaInferior.png';
const fondo3 = '/images/Fondo3.png';
const flor1 = '/images/Flor1.png';
const primeraImagen = '/images/PrimeraImagen.png';
const imgPedidos = '/images/Pedidos.png';
const imgInventario = '/images/Inventario.png';
const imgCierreCaja = '/images/CierreCaja.jpeg';
const technologies = ['React', 'Tailwind CSS', 'JavaScript', 'Vite'];

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

export default function Home() {
  const heroRef = useRef(null);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <Section
        ref={heroRef}
        variant="hero"
        id="inicio"
        aria-labelledby="hero-title"
        className="relative"
      >
        {/* Fondo: Imagen rosas con ventana + gradiente crema suave hacia el texto */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={fondoHero}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradiente suave desde la izquierda hacia la derecha para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-crema/66 via-crema/42 to-transparent" />
          {/* Difuminado suave alrededor del título "Tu negocio" */}
          <div className="absolute top-1/3 left-1/4 lg:top-1/3 lg:left-1/6 w-96 h-96 lg:w-[400px] lg:h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-crema/42 to-transparent rounded-full pointer-events-none" />
          {/* Difuminado suave alrededor del botón "Ver cómo funciona" */}
          <div className="absolute bottom-20 left-1/4 lg:bottom-20 lg:left-1/6 w-64 h-64 lg:w-[300px] lg:h-[300px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-crema/35 to-transparent rounded-full pointer-events-none" />
        </div>

        {/* Imagen compuesta gigante - FUERA del Container, sin límite lateral */}
        <div className="absolute z-[5] pointer-events-none" aria-hidden="true"
          style={{
            top: '64%',
            left: '62%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%',
            maxWidth: 'none',
            maxHeight: 'none',
          }}>
          <img
            src={primeraImagen}
            alt=""
            className="w-full h-full drop-shadow-warm-2xl opacity-100"
            loading="eager"
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Flor1 - ramo en esquina inferior izquierda - 15% más pequeña que 30% extra */}
        <div className="absolute z-[6] pointer-events-none" aria-hidden="true"
          style={{
            bottom: '-8%',
            left: '-4%',
            width: '31%',
            maxWidth: 'none',
          }}>
          <img
            src={flor1}
            alt=""
            className="w-full h-auto drop-shadow-warm-xl opacity-90"
            loading="eager"
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div
          className="relative z-20 pt-24 pb-16 lg:pt-32 lg:pb-24"
          style={{ paddingLeft: '11%', paddingRight: '3%' }}
        >
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* COLUMNA IZQUIERDA: TEXTO */}
              <div
                className="lg:pr-0 text-center lg:text-left animate-fade-in-up"
                style={{ animationDelay: '100ms', position: 'relative', top: '-90px', left: '-230px' }}
              >
                <h1
                  id="hero-title"
                  className="font-lora text-vino text-5xl xl:text-6xl leading-[1.05]"
                >
                  Tu negocio
                  <br />
                  de flores eternas,
                  <span
                    className="block font-radley italic mt-1"
                    style={{ color: '#fd465b' }}
                  >
                    más fácil.
                  </span>
                </h1>

                <Body
                  size="lg"
                  color="cafe-oscuro"
                  className="!mt-6 !mb-0 max-w-sm mx-auto lg:mx-0 text-center lg:text-left"
                >
                  Gestiona tus pedidos, inventario y cierre de caja desde una sola
                  plataforma. Diseñada para floristerías que quieren crecer sin
                  complicaciones.
                </Body>

                <div className="!mt-14 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <ButtonPrimary
                    iconLeft={playIcon}
                    iconRight={arrowIcon}
                    className="w-full sm:w-auto"
                    onClick={() =>
                      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    Ver cómo funciona
                  </ButtonPrimary>
                </div>
              </div>

              {/* COLUMNA DERECHA: Espacio visual para que la imagen de fondo se vea */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="aspect-[4/3] lg:aspect-[3/2] w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Flecha scroll - overlap 20px a siguiente sección */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce" aria-hidden="true">
          <svg className="w-8 h-8 text-vino hover:text-rosa-suave transition-colors drop-shadow-warm" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Overlap visual: dispositivos sobresalen 20px */}
        <div className="relative h-5 lg:h-10 -mt-5" aria-hidden="true" />
      </Section>

      {/* SECCIÓN: ADMINISTRA TU NEGOCIO */}
      <Section variant="adminHero" id="administra" aria-labelledby="admin-title" className="relative overflow-hidden">
        {/* Fondo: Fondo2.png + gradientes legibilidad (origen inf-izq → sup-der) */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={fondo2}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Capa 1: Gradiente base diagonal inf-izq (nítido) → sup-der (máx. opacidad) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-crema/15 to-crema/55" />
          {/* Capa 1b: Refuerzo lateral derecho (zona paneles) - gradiente horizontal */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-crema/5 to-crema/35" />
          {/* Capa 2: Spotlight zona texto (inf-izq, mismo patrón que hero título) */}
          <div className="absolute bottom-1/3 left-1/6 lg:bottom-1/3 lg:left-1/6 w-96 h-96 lg:w-[400px] lg:h-[400px] -translate-x-1/2 translate-y-1/2 bg-gradient-to-tr from-crema/30 via-crema/10 to-transparent rounded-full pointer-events-none" />
          {/* Capa 3: Refuerzo esquina sup-der (máximo desenfoque visual) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-bl from-crema/35 via-crema/15 to-transparent rounded-full pointer-events-none" />
          {/* Flor2 - ramo en esquina inferior izquierda */}
          <div className="absolute z-[6] pointer-events-none" aria-hidden="true"
            style={{
              bottom: '-8%',
              left: '-4%',
              width: '31%',
              maxWidth: 'none',
            }}>
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
          style={{ paddingLeft: '11%', paddingRight: '3%' }}
        >
          <div className="grid lg:grid-cols-[minmax(0,36%)_minmax(0,64%)] gap-12 lg:gap-0 items-center">
            {/* COLUMNA IZQUIERDA: TEXTO */}
            <div
              className="relative z-30 text-center lg:text-left animate-fade-in-up"
              style={{ animationDelay: '100ms', position: 'relative', top: '-90px', left: '-45px' }}
            >
              <h1
                id="admin-title"
                className="font-lora text-vino text-5xl xl:text-6xl leading-[1.05]"
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
              </h1>

              <Body
                size="lg"
                color="cafe-oscuro"
                className="!mt-6 !mb-0 max-w-md mx-auto lg:mx-0 text-center lg:text-left leading-relaxed"
              >
                Lleva el control de tus pedidos, inventario
                <br />
                y cierre de caja desde una interfaz
                <br />
                simple e intuitiva.
              </Body>
            </div>

            {/* COLUMNA DERECHA: Pedidos a la derecha, Inventario y Cierre tapándola */}
            <div
              className="relative w-full min-w-0 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              {/* Pedidos */}
              <img
                src={imgPedidos}
                alt="Panel de Pedidos de Flores Eternas"
                className="relative z-10 block w-full lg:w-[95%] ml-auto rounded-3xl drop-shadow-warm-xl"
                loading="eager"
              />

              {/* Inventario y Cierre: misma ALTURA, ancho natural, salen por izquierda y un poco por la derecha */}
              <div
                className="relative z-20 flex items-start gap-3"
                style={{
                  width: 'max-content',
                  marginLeft: '-8%',
                  marginTop: 'calc(-9% - 130px)',
                }}
              >
                <img
                  src={imgInventario}
                  alt="Panel de Inventario de Flores Eternas"
                  className="block h-auto w-auto max-w-none rounded-3xl drop-shadow-warm-xl"
                  style={{ height: '14vw' }}
                  loading="eager"
                />
                <img
                  src={imgCierreCaja}
                  alt="Panel de Cierre de caja de Flores Eternas"
                  className="block h-auto w-auto max-w-none rounded-3xl drop-shadow-warm-xl"
                  style={{ height: '14vw' }}
                  loading="eager"
                />
              </div>
            </div>
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
          style={{ clipPath: 'inset(0 0 90px 0)', marginBottom: '-215px' }}
        >
          {/* Fondo: cubre toda la sección */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <img src={fondo3} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-crema/10 to-crema/40" />
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-crema/10 to-crema/40" />
          </div>

          <div
            className="relative z-20"
            style={{ paddingTop: '64px', paddingBottom: '48px', paddingLeft: '8%', paddingRight: '6%' }}
          >
            <div className="grid lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-8 lg:gap-6 items-center">
              {/* TEXTO */}
              <div className="relative z-30 text-center lg:text-left animate-fade-in-up -translate-y-[150px]" style={{ animationDelay: '100ms' }}>
                <h2 id="devices-title" className="font-lora text-vino text-5xl xl:text-6xl leading-[1.05]">
                  Disponible en
                  <br />
                  todos tus dispositivos.
                </h2>
                <Body
                  size="lg"
                  color="cafe-oscuro"
                  className="!mt-6 !mb-0 max-w-sm mx-auto lg:mx-0 text-center lg:text-left"
                >
                  Accede desde tu computador, tablet o celular. Tu negocio siempre contigo, en tiempo real.
                </Body>
              </div>

              {/* IMAGEN (la ajustas tú) */}
              <div className="relative z-10 animate-fade-in-up -translate-x-[80px] scale-155" style={{ animationDelay: '300ms' }}>
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
              <p className="text-sm opacity-80 mt-1 max-w-xl">
                Proyecto web de gestión para floristerías: pedidos, inventario y cierre
                de caja en una interfaz responsive, diseñada y desarrollada desde cero.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end shrink-0 mb-4">
              <ButtonSecondary iconRight={arrowRightIcon} variant="white" className="whitespace-nowrap">
                Conocer la plataforma
              </ButtonSecondary>
            </div>
          </div>

          <div className="mt-12 pt-4 border-t border-crema/20 flex flex-col lg:flex-row justify-between items-center gap-3 text-xs">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 opacity-80">
              <p>© 2026 Flores Eternas</p>
              <a href="#" className="hover:underline">Términos y condiciones</a>
              <a href="#" className="hover:underline">Política de privacidad</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="uppercase tracking-widest opacity-70">Construido con</span>
              <ul className="flex flex-wrap justify-center gap-2">
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