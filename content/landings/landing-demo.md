---
layout: landing.njk
title: Landing Demo Cliente
description: Esta es una landing de prueba para mostrar secciones dinámicas.
permalink: index.html
seo:
  canonical: https://startland.netlify.app
  og_title: Startland landing page
  og_description: Startland prueba de landing dinámica con 11ty y Netlify CMS
  og_image: /assets/images/placeholder.jpg
  twitter_title: Startland Landing Demo 
  twitter_description: Startland prueba de landing dinámica con 11ty y Netlify CMS
nav:
  - text: Inicio
    url: "#hero"
  - text: Beneficios
    url: "#benefits"
  - text: Nosotros
    url: "#about"
  - text: Contacto
    url: "#contact"
  - text: WhatsApp
    url: https://wa.me/5491121652703
    external: true
sections:
  - type: hero
    title: Tu negocio online en tiempo récord
    subtitle: Creamos landing pages profesionales, rápidas y optimizadas para que vendas más desde el primer día.
    background: /assets/images/placeholder.jpg
    ctas:
      - text: Quiero mi landing
        url: "#contact"

  - type: pain
    title: "¿Te sientes identificado con alguno de estos problemas?"
    subtitle: "No estás solo. Muchos emprendedores y marketers pasan por esto antes de encontrar una solución definitiva."
    cta_text: "Pero existe una forma más fácil de hacer las cosas."
    cta_button: "Quiero conocer la solución"
    cta_link: "#solution" # Puede ser un anchor link a la siguiente sección o un link directo
    points:
    - title: "Inviertes tiempo y dinero en una landing page que no convierte"
      description: "Diseños poco atractivos, mensajes confusos y una estructura que no guía al usuario hacia la acción."
    - title: "Tu tasa de conversión es más baja de lo que esperabas"
      description: "El tráfico llega, pero se va sin dejar sus datos o comprar tu producto. Es como llenar un balde con un agujero."
    - title: "Dependes de un desarrollador para cada pequeño cambio"
      description: "Cada vez que quieres actualizar un texto, un precio o una imagen, tienes que pedir favores, pagar caro y esperar días."
    - title: "No tienes claridad sobre qué está funcionando y qué no"
      description: "Te falta data y pruebas A/B para optimizar tu página y mejorar tus resultados de forma consistente."

  - type: benefits
    title: Por qué elegir nuestras landings
    items:
      - icon: /assets/images/svg1.png
        title: Rápidas de lanzar
        text: En pocos días tu página lista para vender.
      - icon: /assets/images/svg2.png
        title: Confiables
        text: Diseño seguro, moderno y optimizado para SEO.
      - icon: /assets/images/svg3.png
        title: Fáciles de usar
        text: Editá textos e imágenes sin conocimientos técnicos.

  - type: steps
    title: Así trabajamos con vos
    steps:
      - number: 1
        title: Brief inicial
        text: Definimos juntos tus objetivos y el estilo ideal para tu landing.
      - number: 2
        title: Diseño & Propuesta
        text: Te presentamos un prototipo visual con la estructura pensada para convertir.
      - number: 3
        title: Desarrollo
        text: Programamos la página con diseño premium, velocidad y SEO optimizado.
      - number: 4
        title: Entrega & Soporte
        text: Publicamos tu landing y te enseñamos a gestionarla fácilmente.

  - type: section-divider
    invert: true
    gradient:
      - offset: 0%
        color: "#ff4a57"
        opacity: 0.6
      - offset: 100%
        color: "#ff8a72"
        opacity: 0.6

  - type: about
    title: "Más que una landing: una herramienta de crecimiento"
    text: >
      Creamos sistemas vivos, diseñados para que tu negocio crezca con solidez y transparencia. 
      Nuestras landings están optimizadas desde la base: velocidad, seguridad y diseño responsivo en todos los dispositivos.

    extra_text: >
      Con nuestro panel de administración autogestionable (Netlify CMS), podés actualizar textos, imágenes o secciones en minutos, sin conocimientos técnicos. 
      Además, con la integración de Google Search Console, tenés acceso a estadísticas reales sobre cómo la gente encuentra tu negocio en la web. 
      Y lo mejor: cada landing está pensada para ser escalable, para que tu presencia digital crezca al mismo ritmo que vos.

    images:
      - "/assets/images/about/cms.webp"         # Admin panel
      - "/assets/images/about/googlesearch.webp"            # Google console
      - "/assets/images/about/mockup.webp"          # Ejemplo real de landing
     # - "/assets/images/about/mockup2.jpg"

  - type: faqs
    title: Preguntas frecuentes
    items:
      - question: "¿Puedo editar mi landing yo mismo?"
        answer: "Sí. Con nuestro CMS podés actualizar textos, imágenes y secciones sin conocimientos técnicos."
      - question: "¿Cuánto tarda la entrega?"
        answer: "En promedio entre 3 y 5 días hábiles, con SEO básico incluido. Si necesitás urgencia, podemos agilizar el proceso."
      - question: "¿Se ve bien en celular?"
        answer: "Sí, todas las landings son 100% responsivas, adaptadas a cualquier dispositivo."
      - question: "¿La optimización SEO está incluida?"
        answer: "Sí, entregamos tu página lista para indexarse en Google y con métricas conectadas a Search Console."

  - type: cta-video
    title: Listo para despegar online
    subtitle: Conseguí tu landing page profesional en pocos días. Es simple, rápido y accesible.
    ctas:
      - text: Quiero mi landing
        url: https://wa.me/5491121652703

  - type: contact
    title: Pedí tu landing hoy
    text: Completá el formulario y te contactamos para empezar cuanto antes.

  - type: footer
    text: © 2025 Landing Demo. Todos los derechos reservados.
    email: traduccioncreativadigital@gmail.com
    links:
      - text: Inicio
        url: "#hero"
      - text: Beneficios
        url: "#benefits"
      - text: Nosotros
        url: "#about"
      - text: Contacto
        url: "#contact"
    social:
      - type: instagram
        url: https://instagram.com/demo
      - type: whatsapp
        url: https://wa.me/5491121652703
---
