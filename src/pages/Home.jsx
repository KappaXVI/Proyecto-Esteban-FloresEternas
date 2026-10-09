import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Section,
  Container,
  Heading,
  Body,
  ButtonPrimary,
  ButtonSecondary,
} from '../components';

import fondoHero from '../images/Fondo.png';
import mesa1 from '../images/Mesa1.png';
import superficieMesa from '../images/Superficie de mesa de madera pulida.png';
import mesaInferior from '../images/MesaInferior.png';
import panelGestion from '../images/Panel de gestión floral elegante.png';
import logoImg from '../images/Logotipo Flores Eternas con Monograma LP.png';

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

const roseIcon = (
  <svg className="w-12 h-12 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path d="M12 2C8 2 5 5 5 9c0 4 7 13 7 13s7-9 7-13c0-4-3-7-7-7z" />
    <path d="M12 17V22" />
    <path d="M9 15c0-2 2-3 3-3s3 1 3 3" />
  </svg>
);

const petalIcon = (
  <svg className="w-6 h-6 opacity-40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8 2 5 5 5 9c0 2.5 1.5 4.5 3 6 1.5-1.5 3-3.5 3-6C13 5 10 2 12 2z" />
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

        {/* Decoración floral superior derecha */}
        <div className="absolute top-10 right-10 lg:top-20 lg:right-20 z-10 opacity-30" aria-hidden="true">
          {roseIcon}
        </div>

        <Container size="main" className="relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* COLUMNA IZQUIERDA: TEXTO */}
            <div className="lg:pr-8 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Heading
                id="hero-title"
                level={1}
                italic
                italicText="más fácil."
                italicColor="rosa-suave"
                className="text-vino mb-6"
              >
                Tu negocio de flores eternas,
              </Heading>
              <Body
                size="lg"
                color="cafe-oscuro"
                align="center"
                className="lg:text-left max-w-xl mx-auto lg:mx-0 mb-10"
              >
                Gestiona tus pedidos, inventario y cierre de caja desde una sola plataforma. Diseñada para floristerías que quieren crecer sin complicaciones.
              </Body>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <ButtonPrimary
                  iconLeft={playIcon}
                  iconRight={arrowIcon}
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver cómo funciona
                </ButtonPrimary>
                <ButtonSecondary
                  iconRight={arrowRightIcon}
                  className="w-full sm:w-auto"
                >
                  Contactar
                </ButtonSecondary>
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

                  {/* Celular pequeño al frente izquierda */}
                  <div className="absolute bottom-8 left-4 lg:left-8 w-20 lg:w-28 drop-shadow-warm">
                    <div className="bg-vino/90 rounded-xl p-1 aspect-[9/19] shadow-warm">
                      <div className="bg-crema rounded-lg h-full flex items-center justify-center p-2">
                        <span className="text-xs text-vino font-medium text-center">App</span>
                      </div>
                    </div>
                  </div>

                  {/* Pétalos decorativos sobre la mesa */}
                  <div className="absolute bottom-16 left-6 lg:bottom-20 lg:left-10" aria-hidden="true">
                    {petalIcon}
                  </div>
                  <div className="absolute bottom-12 right-8 lg:bottom-16 lg:right-12 rotate-45" aria-hidden="true">
                    {petalIcon}
                  </div>
                </div>

                {/* Rosas decorativas esquina inferior izquierda */}
                <div className="absolute -bottom-10 -left-6 lg:-bottom-14 lg:-left-8 opacity-60" aria-hidden="true">
                  {roseIcon}
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
      <Section variant="admin" id="administra" aria-labelledby="admin-title">
        <Container size="main">
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
      <Section variant="devices" id="dispositivos" aria-labelledby="devices-title">
        <Container size="main">
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

          {/* Rosas decorativas difuminadas en el fondo */}
          <div className="absolute top-20 left-10 lg:top-32 lg:left-20 w-48 h-48 opacity-10" aria-hidden="true">
            {roseIcon}
          </div>
          <div className="absolute bottom-20 right-10 lg:bottom-32 lg:right-20 w-40 h-40 opacity-10" aria-hidden="true">
            {roseIcon}
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
                className="bg-blanco text-vino hover:bg-crema hover:shadow-warm-lg px-10 py-4 rounded-3xl text-lg"
              >
                Conocer la plataforma
              </ButtonSecondary>
            </div>
          </div>
        </Container>
      </Section>

      {/* FOOTER SIMPLE */}
      <footer className="bg-crema border-t border-gris-claro py-12 px-6" role="contentinfo">
        <Container size="main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-2" aria-label="Flores Eternas - Inicio">
              <img src={logoImg} alt="" className="h-10 w-auto" aria-hidden="true" />
            </Link>
            <p className="text-cafe-medio text-sm text-center md:text-left">
              © 2024 Flores Eternas. Todos los derechos reservados.
            </p>
            <nav className="flex gap-6" aria-label="Enlaces legales">
              <Link to="/privacidad" className="text-cafe-medio text-sm hover:text-vino transition-colors">Privacidad</Link>
              <Link to="/terminos" className="text-cafe-medio text-sm hover:text-vino transition-colors">Términos</Link>
            </nav>
          </div>
        </Container>
      </footer>
    </>
  );
}