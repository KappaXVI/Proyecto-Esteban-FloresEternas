import { useRef } from 'react';
import {
  Navbar,
  Section,
  Container,
  Heading,
  Body,
  ButtonPrimary,
  ButtonSecondary,
} from '../components';

const fondoHero = '/images/Fondo.png';
const mesaInferior = '/images/MesaInferior.png';
const fondo2 = '/images/Fondo2.png';
const fondoDevices = '/images/MesaInferior.png';
const flor1 = '/images/Flor1.png';
const primeraImagen = '/images/PrimeraImagen.png';
const imgPedidos = '/images/Pedidos.png';
const imgInventario = '/images/Inventario.png';
const imgCierreCaja = '/images/CierreCaja.jpeg';

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

const arrowRightIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
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

        <Container size="main" className="relative z-20 pt-10 lg:pt-16 px-[50px] lg:px-[50px] max-w-none">
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* COLUMNA IZQUIERDA: TEXTO */}
              <div className="lg:pr-0 text-center lg:text-left animate-fade-in-up mt-15" style={{ animationDelay: '100ms' }}>
                <h1
                  id="hero-title"
                  className="font-lora text-vino text-5xl md:text-6xl lg:text-6xl leading-[1.05]"
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

                <div className="!mt-14  flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
        </Container>

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
      <Section variant="adminHero" id="administra" aria-labelledby="admin-title" className="relative">
        {/* Fondo: Fondo2.png */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={fondo2}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Difuminado intenso hacia la izquierda (desde donde están las imágenes) */}
          <div className="absolute inset-0 bg-gradient-to-l from-crema/95 via-crema/70 to-transparent" />
        </div>

        {/* Tres tarjetas UI - ABSOLUTAS, fuera del Container (estilo Hero) - Tamaño original al 50% */}
        <div className="absolute z-[5] pointer-events-none" aria-hidden="true"
             style={{
               top: '64%',
               left: '62%',
               transform: 'translate(-50%, -50%)',
               width: '85%',
               height: '85%',
               maxWidth: 'none',
               maxHeight: 'none',
             }}>
          {/* Pedidos - izquierda (delante) */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '36%',
            transform: 'scale(0.6)',
            transformOrigin: 'top left',
            zIndex: 10,
          }}>
            <img
              src={imgPedidos}
              alt="Panel de Pedidos"
              className="drop-shadow-warm-xl rounded-2xl opacity-100"
              loading="eager"
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </div>
          {/* Inventario - centro (delante) */}
          <div style={{
            position: 'absolute',
            top: '350px',
            left: '52%',
            transform: 'scale(0.6)',
            transformOrigin: 'top center',
            zIndex: 10,
          }}>
            <img
              src={imgInventario}
              alt="Panel de Inventario"
              className="drop-shadow-warm-xl rounded-2xl opacity-100"
              loading="eager"
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </div>
          {/* Cierre de Caja - derecha (atrás, 5% más pequeña = scale 0.70, 200px arriba) */}
          <div style={{
            position: 'absolute',
            top: 'calc(10% - 200px)',
            right: 'calc(5% + 80px)',
            transform: 'scale(0.70)',
            transformOrigin: 'top right',
            zIndex: 5,
          }}>
            <img
              src={imgCierreCaja}
              alt="Panel de Cierre de Caja"
              className="drop-shadow-warm-xl rounded-2xl opacity-100"
              loading="eager"
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>

        <div className="relative z-20 pt-10 lg:pt-16" style={{ paddingLeft: '11%', paddingRight: '8%' }}>
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* COLUMNA IZQUIERDA: TEXTO - MISMO QUE HERO */}
              <div className="lg:pr-0 text-center lg:text-left animate-fade-in-up mt-15" style={{ animationDelay: '100ms' }}>
                <h1
                  id="admin-title"
                  className="font-lora text-vino text-5xl md:text-6xl lg:text-6xl leading-[1.05]"
                >
                  Administra
                  <br />
                  tu negocio
                  <span
                    className="block font-radley italic mt-1 whitespace-nowrap"
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
                  simple e intuitiva
                </Body>
              </div>

              {/* COLUMNA DERECHA: Espacio visual para que la imagen absolute se vea */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="aspect-[4/3] lg:aspect-[3/2] w-full" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECCIÓN: DISPONIBLE EN TODOS TUS DISPOSITIVOS */}
      <Section variant="devices" id="dispositivos" aria-labelledby="devices-title" className="relative">
        {/* Fondo: Mesa inferior recortada + crema */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={fondoDevices}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-crema/90" />
        </div>

        <Container size="main" className="relative z-10">
          <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
            <Heading
              id="devices-title"
              level={2}
              className="text-vino mb-6"
            >
              Disponible en todos tus dispositivos
            </Heading>
            <Body size="lg" color="cafe-oscuro" align="center" className="max-w-2xl mx-auto">
              Accede desde tu computador, tablet o celular. Tu negocio siempre contigo, en tiempo real.
            </Body>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <img
              src={mesaInferior}
              alt="Composición de monitor de escritorio, laptop y celular con ramos de rosas a los lados"
              className="w-full max-w-5xl mx-auto drop-shadow-warm-xl rounded-3xl"
              loading="lazy"
            />
          </div>

        </Container>
      </Section>

      {/* CTA FINAL BANNER */}
      <Section variant="cta" id="cta" aria-labelledby="cta-title" className="relative">
        <div className="absolute inset-0 bg-vino rounded-5xl overflow-hidden" aria-hidden="true">
          {/* Textura floral sutil */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${fondoHero})` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-vino/90 via-vino to-vino-hover" />
        </div>

        <Container size="main" className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 py-12 lg:py-16">
            <div className="text-center lg:text-left animate-fade-in-up">
              <Heading
                id="cta-title"
                level={2}
                className="text-crema mb-4"
              >
                ¿Lista para hacer crecer tu floristería?
              </Heading>
              <Body size="lg" color="crema" align="center" className="lg:text-left max-w-xl mx-auto lg:mx-0 opacity-90">
                Descubre todo lo que puedes hacer con Flores Eternas.
              </Body>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <ButtonSecondary
                iconRight={arrowRightIcon}
                variant="white"
                className="px-4 py-2 text-lg"
              >
                Conocer la plataforma
              </ButtonSecondary>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}