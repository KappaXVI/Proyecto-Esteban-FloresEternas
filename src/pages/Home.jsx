import { useState, useEffect, useRef } from 'react';
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
const mesa1 = '/images/Mesa1.png';
const superficieMesa = '/images/Superficie%20de%20mesa%20de%20madera%20pulida.png';
const mesaInferior = '/images/MesaInferior.png';
const panelGestion = '/images/Panel%20de%20gesti%C3%B3n%20floral%20elegante.png';
const fondoAdmin = '/images/Panel%20de%20gesti%C3%B3n%20floral%20elegante.png';
const fondoDevices = '/images/MesaInferior.png';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {/* Fondo: Imagen rosas con ventana + gradiente crema izquierda */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={fondoHero}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-crema/95 via-crema/60 to-transparent" />
        </div>

        <Container size="main" className="relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* COLUMNA IZQUIERDA: TEXTO */}
            <div
              className="lg:pr-8 text-center lg:text-left animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              <h1
                id="hero-title"
                className="font-lora text-vino text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
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
                className="!mt-6 !mb-0 max-w-md mx-auto lg:mx-0 text-center lg:text-left"
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

            {/* COLUMNA DERECHA: VISUAL - Laptop + Celular sobre madera */}
            <div className="relative lg:pl-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="relative -mt-5 lg:-mt-10 z-20">
                {/* Superficie de mesa de madera */}
                <div className="relative">
                  <img
                    src={superficieMesa}
                    alt=""
                    className="w-full max-w-lg mx-auto block"
                    aria-hidden="true"
                    loading="eager"
                  />

                  {/* Laptop principal (Mesa1) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 lg:translate-y-8 w-[85%] max-w-md">
                    <img
                      src={mesa1}
                      alt="Laptop mostrando la tienda pública de Flores Eternas"
                      className="w-full drop-shadow-warm-lg"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Flecha scroll - overlap 20px a siguiente sección */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce" aria-hidden="true">
          <svg className="w-8 h-8 text-vino/60 hover:text-vino transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Overlap visual: dispositivos sobresalen 20px */}
        <div className="relative h-5 lg:h-10 -mt-5" aria-hidden="true" />
      </Section>

      {/* SECCIÓN: ADMINISTRA TU NEGOCIO */}
      <Section variant="admin" id="administra" aria-labelledby="admin-title" className="relative">
        {/* Fondo: Panel de gestión recortado + gradiente crema */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={fondoAdmin}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-crema via-crema to-rosa-suave/10" />
        </div>

        <Container size="main" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* COLUMNA IZQUIERDA: TEXTO */}
            <div className="animate-fade-in-up">
              <Heading
                id="admin-title"
                level={2}
                italic
                italicText="sin complicaciones."
                italicColor="rosa-suave"
                className="text-vino mb-6"
              >
                Administra tu negocio
              </Heading>
              <Body size="lg" color="cafe-oscuro" className="max-w-xl">
                Lleva el control de tus pedidos, inventario y cierre de caja desde una interfaz simple e intuitiva.
              </Body>
            </div>

            {/* COLUMNA DERECHA: 3 PANELES SOLAPADOS (imagen referencial) */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative z-10">
                <img
                  src={panelGestion}
                  alt="Vista de los paneles de Pedidos, Inventario y Cierre de caja de Flores Eternas"
                  className="w-full max-w-xl mx-auto drop-shadow-warm-xl rounded-3xl"
                  loading="lazy"
                />
              </div>

              {/* Indicador visual de solape con tarjetas superpuestas decorativas */}
              <div className="absolute -top-6 -right-4 lg:-top-8 lg:-right-6 w-64 h-48 bg-blanco/80 rounded-2xl shadow-warm border border-rosa-suave/30 rotate-3" aria-hidden="true" />
              <div className="absolute bottom-8 -left-4 lg:bottom-10 lg:-left-6 w-56 h-40 bg-blanco/80 rounded-2xl shadow-warm border border-rosa-suave/30 -rotate-2" aria-hidden="true" />
            </div>
          </div>
        </Container>
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