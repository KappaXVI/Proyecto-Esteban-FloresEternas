import { Button, Heading, Paragraph } from '@heroui/react'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      <div className="absolute inset-0 z-10 opacity-10" style={{ backgroundImage: 'url(/bg-pattern.svg)' }} />
      
      <div className="relative z-20 max-w-4xl px-6 text-center">
        <div className="space-y-6">
          <Heading className="text-white font-bold tracking-tight" level={1}>
            Flores Eternas
          </Heading>
          <Paragraph className="text-gray-300 text-lg max-w-2xl mx-auto">
            Belleza que perdura. Arreglos florales preservados que mantienen su frescura y elegancia por años.
          </Paragraph>
          <div className="flex gap-4 justify-center mt-8">
            <Button color="primary" size="lg" autoWidth>
              Ver Catálogo
            </Button>
            <Button color="secondary" variant="bordered" size="lg" autoWidth>
              Contactar
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}